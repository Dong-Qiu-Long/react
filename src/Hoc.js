import React, { Component } from 'react'

export default function withTest(Comp){
	const Comps = React.forwardRef(Comp)
	class B extends Component{
		componentDidMount(){
			console.log(`日志${Comp.name}被创建了`)
		}
		render(){
			const {abc,...refc} = this.props;
			console.log(abc)
				return <><Comps ref = {abc} {...refc}/></>

		}
	}
	return React.forwardRef((props,ref)=>{
			console.log(ref)
		return <B abc = {ref} {...props}/>
	})
}