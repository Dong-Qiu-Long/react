import React, { PureComponent } from 'react'
import './index.css'
export default function Father(Come){
	return class Fathera extends PureComponent {
		state = {
			x:0,
			y:0
		}
		divRef = React.createRef();
		handleMouseMove = e => {
			const {top,left} = this.divRef.current.getBoundingClientRect();
			const x = e.clientX - left;
			const y = e.clientY - top;
			this.setState({
				x:parseInt(x),
				y:parseInt(y)
			})
		}
		render() {
			return (
				<div ref={this.divRef} className="box" onMouseMove={this.handleMouseMove}>
					<Come {...this.state}/>
				</div>
			)
		}
	}
}
