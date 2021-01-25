import {Component} from 'react';
import {withRouter} from 'react-router-dom';

class RouteGuard extends Component {
	componentDidMount(){
		//添加监听器
		this.unListen = this.props.history.listen((location,action) =>{
			if(this.props.onChange){
				const prevLocation = this.props.location;
				this.props.onChange(location,action,prevLocation)
			}
		})
		//设置阻塞 跳转页面是起作用
		this.props.history.block("真的要跳转页面吗?")
	}
	componentWillUnmount(){
		//卸载监听器
		this.unListen();
	}
	render() {
		return this.props.children
		
	}
}

export default withRouter(RouteGuard)