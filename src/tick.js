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
				倒计时:{this.state.num}
			</h1>
			<p>{this.state.n}</p>
		</div>)
	}
}