import React, { Component,PureComponent } from 'react'
import ReactDOM from 'react-dom';
import Err from './Err '

function ChildA(){
  return <div>
    我是childA
  </div>
}

function ChildB(){
  return <div>
    {this.a}
    我是ChildB
  </div>
}

function App(){
  return (
    <div className="app">
      我是App
      <ChildA/>
      <Err>
        <ChildB/>
      </Err>
    </div>
  )
}

ReactDOM.render(<div><App/></div>,
  document.getElementById('root')
);

/**
 * 错误边界
 * 默认情况下，若一个组件在渲染期间render 发生错误，会导致整个组件树全部卸载
 */
