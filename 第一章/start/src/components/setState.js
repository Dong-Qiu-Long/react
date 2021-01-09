import React from 'react';
export default class State extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			num:0
		}
	}
	clicka(){
		this.setState((state)=>{
			return {
				num:state.num + 1
			}
		})
		this.setState((state)=>{
			return {
				num:state.num + 1
			}
		})
		this.setState((state)=>{
			return {
				num:state.num + 1
			}
		})
	}
	render() {
		console.log('渲染了')
		return (
			<div>
				{this.state.num}
				<button onClick={this.clicka.bind(this)}>按钮</button>
			</div>
		)
	}
}
// console.log([4,5,43,13,0].join(''))
const arr = [{a:0.00},{a:1.21},{a:2.45}];
arr.map((item)=>{
	item.a = parseFloat(item.a).toString()
	
})
console.log(arr)