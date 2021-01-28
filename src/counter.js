export default {
	//库名
	namespace:'counter',
	//数据  
	state:10,
	//resucers方法
	reducers:{
		increase(state,action){
			return state + 1;
		},
		decrease(state,action){
			return state - 1;
		},
		add(state,{payload}){
			return state + payload
		}
	},
	//处理副作用
	effects:{
		*fecthAdd(action,{call,put}){
			yield delay(2000);
			yield put({type:"increase"})
			console.log('异步加')
		}
	},
	subscriptions:{
		start(obj){
			console.log(obj);
			//监听窗口变化，改变时让数字变化
			window.onresize = ()=>{
				obj.dispatch({type:'increase'})
			}
		}
	}
}

function delay(time){
	return new Promise((res)=>{
		setTimeout(()=>{
			res()
		},time)
	})
}