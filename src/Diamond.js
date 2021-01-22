import React, { Component } from 'react'
import Father from './Father';
import './index.css'
export default class Diamond extends Component {
	render() {
		return (
			<div>
				<Father>
					{(value)=>{
						return <div className='diamond' style={{
							top:value.y - 50,
							left:value.x - 50
						}}></div>
					}}
				</Father>
			</div>
		)
	}
}
