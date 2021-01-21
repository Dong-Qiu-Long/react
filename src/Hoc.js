import React, { Component } from 'react'

export default function withLog(Comp){
	return class extends React.Component{
		componentDidMount(){
			console.log('我来了')
		}
		render(){
			return <Comp {...this.props}></Comp>
		}
	}
}