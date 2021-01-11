import React from 'react';
import PropTypes from 'prop-types'
export default function FuncSon(props,context){
	function clicka(){
		console.log(context.a)
	}
	return <div>
		<h1>{context.b}喜欢又又 ~~~ {context.a}</h1>
		<button onClick={context.func}>按钮</button>
	</div>
}
FuncSon.contextTypes = {
	a:PropTypes.number,
	b:PropTypes.string,
	func:PropTypes.func
}