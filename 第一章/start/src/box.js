import React, { Component } from 'react'
import Father from './Father.js';
import './index.css'
export default class Box extends Component {
	render() {
		return (
			<div>
				<Father>
					{
						(move)=>{
							return (<div className="son" style={{
								top:move.y-50,
								left:move.x-50
							}}></div>)
						}
					}
				</Father>
			</div>
		)
	}
}
