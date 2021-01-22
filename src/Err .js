import React, { Component,PureComponent } from 'react'
export default class Err extends React.PureComponent{
  state = {
    hasError:false
  }
  /////方式一 getDerivedStateFromError 推荐
  // static getDerivedStateFromError(err){ //发生错误时运行该函数
  //   console.log('发生了错误',err)
  //   return {
  //     hasError:true
  //   }
  // }
  //方式二  componentDidCatch
  componentDidCatch(err,info){
    console.log('发生错误')
    this.setState({
      hasError:true
    })
  }
  render(){
    if(this.state.hasError){ //根据错误状态返回不同内容
      return <h1>发生了错误</h1>
    }
    return this.props.children
  }
}