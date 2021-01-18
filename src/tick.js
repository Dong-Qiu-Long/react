import React from 'react';

export default class Tick extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props)
		this.state = {
			num:this.props.num,
			n:123
		}

		this.timer = setInterval(()=>{
			this.setState({
				num:this.state.num - 1
			})
			if(this.state.num <= 0){
				clearInterval(this.timer);
				return
			}
		},1000)
	}
	render(){
		return (<div>
			<h1>
				倒计时:<B num={this.state.num}/>
			</h1>
		</div>)
	}
}

function B(props){
	return <C num={props.num}/>
}

function C(props){
	return <div>{props.num}</div>
}