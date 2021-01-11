import React, { Component } from 'react'
import PropTypes from 'prop-types';
import FuncSon from './funcSon.js'
export default class Son extends Component {
	//使用上下文中的数据, contextTypes该属性描述了需要获取的上下文中的数据类型
	static contextTypes={
		a:PropTypes.number,
		b:PropTypes.string
	}
	//第二个参数是上下文数据
	constructor(props,context){
		super(props,context)
		console.log(this.context) // 获取数据
	}
	render() {
		
		return (
			<div>
				<h1>董秋龙</h1>
				<FuncSon/>
			</div>
		)
	}
}
