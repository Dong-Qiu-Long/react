import React from 'react'
export default function WiteTest(Comp){
	return class extends React.Component{
		componentDidMount(){
			console.log(`日志:组件${Comp.name}被创建了! 时间:${Date.now()}`)
		}
		componentDidUpdate(){
			console.log(`日志:组件${Comp.name}被销毁了! 时间:${Date.now()}`)
		}
		render(){
			return <Comp {...this.props}/>
		}
	}
}
// 123