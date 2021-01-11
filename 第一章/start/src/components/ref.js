import React, { Component } from 'react'
function Car(props,ref){
	return <h1 ref={ref}>车</h1>
}
const NewCar = React.forwardRef(Car)
class A extends React.Component {
	render(){
		console.log(this.props)
		return (<div><h1 ref={this.props.ref1}>H1</h1></div>)
	}
}

export default class ref extends Component {
	constructor(props){
		super(props);
		this.reg = React.createRef();
		this.a = React.createRef();
	}
	clicka(e){
		this.reg.current.style.color = '#a45';
		console.log(this.a)
	}
	render() {
		return (
			<div>
				<NewCar ref={this.reg}/>
				<A ref1={this.a}/>
				<button onClick={this.clicka.bind(this)}>按钮</button>
			</div>
		)
	}
}

