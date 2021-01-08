import React from 'react';
import Times from './times.js'
export default class Poll extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			str:'倒计时',
			vare:false
		}
	}
	selfs(){
		console.log(this)
		this.setState({
			vare:true
		})
	}
	render(){
		if(this.state.vare){
			this.state.str = '完成'
		}
		return (<div>
			<Times onOver={this.selfs.bind(this)}  times={this.props.num}/>
			{this.state.str}
		</div>)
	}
}