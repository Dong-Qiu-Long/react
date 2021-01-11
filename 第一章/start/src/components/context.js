import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Son from './son.js'、
const ctx = React.createContext()
class Son extends Component {
	constructor(props){
		super(props);
		this.state = {
			b:'秋龙'
		}
	}
	static contextType = ctx;
	render(){
		return (<div>
			{this.context.a}
			<ctx.Provider value={this.state}>
				<ChildA/>
			</ctx.Provider>
		</div>)
	}
}
 
function ChildA(props){
	return <div>
		<h1>ChildA</h1>
		<ctx.Consumer>
			{
				(value) =>{
					return <div>
						<h1>{value.a}| {value.b}</h1>
						<button onClick={value.func}>按钮</button>
					</div>
				}
			}
		</ctx.Consumer>
	</div>
}

export default class Context extends Component {
		constructor(props){
			super(props);
			this.state = {
				a:0,
				func:this.btnClick.bind(this)
			}
		}
	btnClick(){
		this.setState({
			a:this.state.a+1
		})
	}
	render() {
		return (
			<div>
				<ctx.Provider value={this.state}>
					<Son/>
				</ctx.Provider>
				<button onClick={this.btnClick.bind(this)}>按钮a</button>
			</div>
		)
	}
}
