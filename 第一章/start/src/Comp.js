import React from 'react';
export class A extends React.Component{
	//不在关注和组件不相关的事情
	render(){
		return <h1>A{this.props.a}</h1>
	}
}
export class B extends React.Component{
	//不在关注和组件不相关的事情
	render(){
		return <h1>B{this.props.a}</h1>
	}
}