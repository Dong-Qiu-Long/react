import * as usersAction from '../action/add';

//默认数据
const initialState = [];

export default (state = initialState,{type,payload})=>{
	switch (type) {
		case usersAction.ADDUSER:
			return [ ...state,payload]; //添加
		case usersAction.DELETEUSER:
			return state.filter(item =>  item.id != payload); //删除
		case usersAction.UPDATEUSER:
			return state.map(item => item.id == payload.id? payload:item); //修改
		default:
			return state;
	}
}