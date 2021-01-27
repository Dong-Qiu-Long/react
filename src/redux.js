import {createStore,applyMiddleware , bindActionCreators} from 'redux';
import numReducer from './reducer/numReducer';
import  {actionTypes,sub} from './action/numAction';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// //导入指令
import {take,all,takeEvery,delay, put} from 'redux-saga/effects';
const sagaMid = createSagaMiddleware() //创建一个saga中间件

export default  createStore(numReducer,applyMiddleware(sagaMid,logger))
// console.log(actionTypes)
function* add(){
	yield delay(2000);
	console.log('我来啦')
	yield put(sub())
}
function* sagatask(){
	yield takeEvery(actionTypes.NUMAJAX,add)
}

sagaMid.run(sagatask) //启动saga任务

