
import { number } from 'prop-types';
import {createAction,createActions} from 'redux-actions'
export const  actionTypes = {
	NUMADD:'ADD',
	NUMCDU:'SUB',
	NUMADDS:'ADDS',
	NUMAJAX:'FETCH'
}
export const {add,sub,adds,fetch} = createActions({
	[actionTypes.NUMADD]:number=>number,
	[actionTypes.NUMCDU]:null,
	[actionTypes.NUMADDS]:number=>number,
	[actionTypes.NUMAJAX]:number => number
})

export const ADD = createAction(actionTypes.NUMADD,number=>number);
export const SUB = createAction(actionTypes.NUMCDU);
export const ADDS = createAction(actionTypes.NUMADDS,number=>number);

// export function ADD(value){
// 	return {
// 		type: NUMADD
// 	}
// }

// export function SUB(){
// 	return {
// 		type:NUMCDU
// 	}
// }

// export function fetchUsers(){
// 	return async function(dispatch){
// 		set
// 	}
// }