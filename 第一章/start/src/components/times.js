import React from 'react';
export default class tiems extends React.Component{
	// state = {  //初始化属性  还没有标准
	// 	tiems:this.props.tiems
	// }
	constructor(props){
		super(props)
		//状态初始化
		this.state = {
			num:this.props.times
		}
		this.timers = setInterval(()=>{
			//从新渲染
			this.setState({
				num:this.state.num - 1
			})//重新设置状态，触发自动的重新渲染
			if(this.state.num <= 0){
				clearInterval(this.timers)
				this.props.onOver()
			}
		},1000)
	}
	render(){
		return (<div>{this.state.num}</div>)
	}
}