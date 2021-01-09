import React from 'react';
export default class MyClassComp extends React.Component {
	constructor(props){
		super(props) //this.props = props
	}
	render(){
		return <h1>我是类组件{this.props.name}</h1>
	}
}