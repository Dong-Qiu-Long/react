import React, { Component } from 'react'

export default class times extends Component {
	constructor(props){
		super(props)
		this.state = {
			num:10
		}
		this.times = setInterval(()=>{
			this.setState({
				num:this.state.num - 1
			})
			if(this.state.num <= 0){
				clearInterval(this.times);
				this.props.onVer()
				return
			}
		},1000)
	}
	render() {
		return (
			<div>
				<h1>{this.state.num}</h1>
			</div>
		)
	}
}
