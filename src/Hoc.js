import React, { Component } from 'react'

export default function withTest(Comp){
	return class extends Component{
		componentDidMount(){
			console.log(`日志${Comp.name}被创建了`)
		}
		render(){
			if(this.props.isLongin){
				return <Comp {...this.props}/>
			}
			return null
		}
	}
}
