import React, { Component } from 'react'
import { connect } from 'dva';
import { BrowserRouter,NavLink,Route} from 'dva/router'
import { Switch ,Router} from 'react-router';

class App extends Component {
	constructor(props){
		super(props);
		console.log(props)
	}
	render() {
		return (
			<div>
				Dong秋龍
				<button onClick={this.props.onAdd}>加</button>
				<h1>{this.props.num}</h1>
				<button onClick={this.props.onSub}>减</button>
				<button onClick={()=>{
					this.props.onAdds(5)
				}}>多加几个</button>
				<button onClick={this.props.fetchAdd}>异步键</button>
			{/* <RouterCount/>  */}
			</div>
		)
	}
}

function RouterCount(){
	return( <BrowserRouter>
		<div>
			<ul>
				<li><NavLink to="/">首页</NavLink></li>
				<li><NavLink to="/app">应用</NavLink></li>
			</ul>
			<div>
				<Switch>
					<Route path="/" connect={Home}></Route>
					<Route path="/app" connect={App1}></Route>
				</Switch>
			</div>
		</div>
	</BrowserRouter>)
}
function Home(){
	return <div>首页</div>
}
function App1(){
	return <div>应用</div>
}
function mapStateToProps(state){
	return{
		num:state.counter
	}
}

function mapDispatchToProps(dispatch){
	return {
		onAdd(){
			dispatch({type: "counter/increase"})
		},
		onSub(){
			dispatch({type: "counter/decrease"})
		},
		onAdds(val){
			dispatch({type:"counter/add",payload:val})
		},
		fetchAdd(){
			dispatch({type:"counter/fecthAdd"})
		}
	}
}

export default  connect(mapStateToProps,mapDispatchToProps)(App);
