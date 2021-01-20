import React, { Component } from 'react'

export default function isB(Comp){
	
	return class extends Component{
		componentDidMount(){
			console.log(`${this.Comp}退出了!`)
		}
		render(){
			return <Comp {...this.props}/>
		}

	}
}