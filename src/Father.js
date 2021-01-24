import React, { Component } from 'react'
import './index.css'

export default class Father extends Component {
	constructor(props){
		super(props);
		this.state = {
			x:this.props.x ,
			y:this.props.y 
		}
	}
	divRef = React.createRef();
	render() {
		return (
			<div ref={this.divRef} className="box" onMouseMove={(e)=>{
				const {top,left} = this.divRef.current.getBoundingClientRect();
				const x = e.clientX - left;
				const y = e.clientY - top;
				this.setState({
					x:parseInt(x),
					y:parseInt(y)
				})
			}}>
				{this.props.children(this.state)}
			</div>
		)
	}
}
