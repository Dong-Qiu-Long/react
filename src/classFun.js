import React from 'react';

export default class ClassFun extends React.Component {
	constructor(props){
		super(props);

	}
	render(){
		return ( <div>
			<h1>类组件</h1>
			<p>姓名:{this.props.nameDong}</p>
		</div>)
	}
}