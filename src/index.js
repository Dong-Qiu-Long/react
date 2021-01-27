import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux'
import  {add,sub,adds,fetch} from './action/numAction';
import store from "./redux"

window.add = function(){
	console.log(add);
	store.dispatch(add(10))
}

class App extends React.Component{
	render(){
		return <div>
			<button onClick={this.props.onAdd}>加</button>
			<h1>{this.props.num}</h1>
			<button onClick={this.props.onSub}>减</button>
			<button onClick={()=>{
				this.props.onAdds(5)
			}}>多加点</button>
			<button onClick={()=>{
				this.props.onFetch(10)
			}}>来个异步</button>
		</div>
	}
}
/**
 * 
 * @param {*} state 
 */
function mapStateToProps(state){
	console.log(state)
	return{
		num:state
	}
}
/**
 * 
 * @param {*} dispatch 
 */
function mapDispathToProps(dispatch){
	// console.log(dispatch);
	return{
		onAdd(){
			dispatch(add())
		},
		onSub(){
			dispatch(sub())
		},
		onAdds(val){
			console.log(val)
			dispatch(adds(val))
		},
		onFetch(val){
			console.log(val)
			dispatch(fetch(val))
		}
	}
}
const Connect = connect(mapStateToProps,mapDispathToProps)(App)
// class Connect extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = mapStateToProps(store.getState());
// 		store.subscribe(()=>{
// 			this.setState(mapStateToProps(store.getState()))
// 		})
// 	}
// 	render(){
// 		const eventHandlers = mapDispathToProps(store.dispatch);
// 		return <App {...this.state} {...eventHandlers} />
// 	}
// }

ReactDOM.render(<Provider store={store}><Connect/></Provider>, document.getElementById('root'));
