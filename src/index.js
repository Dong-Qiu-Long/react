import React, { Component,PureComponent ,useState } from 'react'
import ReactDOM from 'react-dom';

function App(){
  const [num, setNum] = useState(0);
  const [self,setSelf] = useState(true)
  return (
  <div>
    <button onClick={()=>{
      setNum(num+1)
    }}>加</button>
    <h1>{num}</h1>
    <button onClick={()=>{
      setNum(num => num-1)
      setNum(num => num-1)
    }}>减</button>
    <h1 style = {{
      display:self ? 'block':'none'
    }}>你说咋地就咋地</h1>
    <button onClick={()=>{
      setSelf(!self)
    }}>显示/隐藏</button>
  </div>)
}

ReactDOM.render(<App/>,
  document.getElementById('root')
);

/**
 * HOOK简介
 * 组件:无状态组件， 类组件
 * 
 * 类组件中的麻烦
 * 1.this指向问题
 * 2.繁琐的生命周期
 * 
 * HOOK专门用于增强函数组件的功能，使之理论上可以成为类组件的替代品
 * HOOK(钩子) 本质上是一个函数， 该函数可以挂在任何功能
 * HOOK种类
 * 1.useState
 * 2.useEffect
 * 3.其他。。。
 * 
 */

 /**
  * 一个函数组件中可以有多个状态
  * 这种做法非常有利于横切关注点
  */