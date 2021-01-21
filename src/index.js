import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Context from './context';
import PropTypes from 'prop-types'

//创建上下文
//1.给类组件书写静态属性 childContextTypes 使用该属性对上下文中的数据类型进行约束
//2.添加实例方法 getChildContext 该方法返回的对象，即为上下文中的数据， 该数据必须满足类型约束

class App  extends Component {

  /**
   * 约束上下文中的数据类型
   */
  static childContextTypes  = {
    a:PropTypes.number,
    b:PropTypes.string.isRequired,
    fun:PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
      a:1,
      b:'123',
      fun:this.onClickFun
    }
  }
  
  onClickFun = ()=>{
    this.setState({
      a:this.state.a + 1
    })
  }

  /**
   * 发布上下文中的数据
   */
  getChildContext(){
    console.log('发布上下文中的数据')
    return this.state
  }

  render() {
    return (
      <div>
        <Context/>
        {this.state.a}
        <button onClick = {this.state.fun}>
            加
        </button>
      </div>
    )
  }
}


ReactDOM.render(<div><App/></div>,
  document.getElementById('root')
);


