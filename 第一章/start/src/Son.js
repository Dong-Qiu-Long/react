import React, { Component } from 'react'
import Father from './Father.js';
class Son extends Component {
	render() {
		return (
			<div>
				<h1>x:{this.props.x} y: {this.props.y}</h1>
			</div>
		)
	}
}
export default Father(Son)

