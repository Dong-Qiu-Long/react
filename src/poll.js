import React from 'react';
import './index.css'
//一个能自动移动的小球
export default class Poll extends React.Component{
	constructor(props){
		super(props);
		//属性中分别传递横纵坐标的速度
		this.state = {
			top:props.top || 0,
			left:props.left || 0,
			x:this.props.x,
			y:this.props.y
			
		}
		const time = 15;
		this.timer = setInterval(()=>{
			const 	x = this.state.x * time / 1000;
			const 	y = this.state.y * time / 1000;
			let left = this.state.left + x;
			let top = this.state.top + y;
			if(left < 0){
				left = 0;
				this.setState({
					x:-this.state.x
				})
			}else if(left >= document.documentElement.clientWidth - 100){
				left = document.documentElement.clientWidth - 100;
				this.setState({
					x:-this.state.x
				})
			}
			
			if(top < 0){
				top = 0;
				this.setState({
					y:-this.state.y
				})
			}else if(top > document.documentElement.clientHeight - 100){
				top = document.documentElement.clientHeight - 100;
				this.setState({
					y:-this.state.y
				})
			}

			this.setState({
				left,
				top
			})
		},time)
	}
	render(){
		return <div 
		className='poll' 
		style = {{
			left:this.state.left+'px',
			top:this.state.top + 'px',
			background:this.props.bg
		}}
		></div>
	}
}