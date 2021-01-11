import React from 'react';
import ReactDOM from 'react-dom';

function ChildA(){
	const dom = (
	<div>
		<h1>ChildA</h1>
		<ChildB></ChildB>
	</div>
	);
	return ReactDOM.createPortal(dom,document.querySelector('#main'))
}
//错误处理类组件
class Err extends React.PureComponent{
	state = {
		hasError:false
	}
	// static getDerivedStateFromError(err){
	// 	console.log('发生了错误',err)
	// 	return {
	// 		hasError:true
	// 	}
	// }
	componentDidCatch(err,info){
		console.log('发生错误')
		this.setState({
			hasError:true
		})
	}
	render(){
		if(this.state.hasError){
			return <h1>发生了错误</h1>
		}
		return this.props.children
	}
}
function App(){
	return(
		<div className="app">
		<Err>
			<ChildA/>
		</Err>
		</div>
	)
}
ReactDOM.render(<div><App/></div>,document.getElementById('root'));