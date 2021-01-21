import React, { Component } from 'react'
import PropTypes from 'prop-types'

function A(props,context){
	console.log(context)
	return <div>
		我是A
		{context.a}
		<button onClick={context.fun}>来吧</button>
		</div>
}
A.contextTypes = {
	a:PropTypes.number,
	b:PropTypes.string,
	fun:PropTypes.func
}

export default class Context extends Component {
/**
 * 必须声明上下文中的数据
 */
	static contextTypes  = {
		a:PropTypes.number,
		b:PropTypes.string
	}

	constructor(props,context){
		super(props);
		// console.log(context)
	}

	render() {
		return (
			<div>
				<A/>
			</div>
		)
	}
}
