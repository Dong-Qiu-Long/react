import {createStore} from 'redux';
import * as actionTypes from './action'

/**
 * reducer本质上就是一个普通函数
 * @param {*} state :厂库数据
 * @param {*} action : 描述要曹
 */
 function  reducer(state,action) {
   console.log(state,action)
   switch (action.type) {
      case actionTypes.ADD:
        return state + action.payload;
      case actionTypes.SUB:
       return state - 1;
      default:
        return state;
   }
 }

 const state =  createStore(reducer,10)

//  const obj = {
//    type:actionTypes.ADD
//  }
//使用函数
function Add(value){
  return {
    type:actionTypes.ADD,
    payload:value
  }
}
state.dispatch(Add(2))
console.log(state)
console.log(state.getState())