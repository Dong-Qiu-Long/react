import React, { Component } from 'react'
import Father from './Father'

export default class Son extends Component {
	render() {
		return (
			<div>
				<Father>
					{(value)=>{
						return <h1>X:{value.x} Y:{value.y}</h1>
					}}
				</Father>
			</div>
		)
	}
}
