import {actionTypes}  from '../action/numAction';
import {handleActions} from 'redux-actions';
export default handleActions({
  [actionTypes.NUMADD]:(state,action) => {console.log(action.payload);return state + 1},
  [actionTypes.NUMCDU]:state => state-1,
  [actionTypes.NUMADDS]:(state,action)=>{
    console.log(action.payload);
    return state + action.payload;
  }
},5)

// export default function numReducer(state = 10,action){
//   switch (action.type) {
//     case actionTypes.NUMADD:
//       return state + 1;
// 		case actionTypes.NUMCDU:
//       console.log(action.payload)
// 			return state - 1;
//     default:
// 			return state;
//   }
// }
// export default handleAction(actionTypes.NUMADD,(state,action)=>{
//   return state + 1;
// },20)