import React, {useState,useEffect } from 'react'
import ReactDOM from 'react-dom';

function reducer(state,action){
  switch(action.type){
    case "add":
      console.log('加')
      return state +1;
    case 'subtract':
      console.log('减')
      return state - 1;
    default:
      return state
  }
}

function App(){
  const [n, setN] = useState(0);

  //分发器
  function dispatch(action){
    const newN = reducer(n,action);
    setN(newN)
  }
  
  return <div>
    <button onClick={()=>{
      dispatch({type:'add'})
    }}>加</button>
    <h1>{n}</h1>
    <button onClick={()=>{
      dispatch({type:'subtract'})
    }}>减</button>
  </div>
}

ReactDOM.render(<App/>,
  document.getElementById('root')
);

/**
 * 自定义HOOOK
 * State Hook: useState
 * Effect HOOK: useEffect
 */
/**
 * 自定义HOOOK
 * 自定义Hook:将一些常用的，跨越多个组件的Hook功能，抽离出去形成一个函数，该函数就是自定义hook
 * 自定义Hook功能，所以它本省也需要按照Hook的规则实现
 * 例如:
 * 1.很多组价你都需要在第一次加载完成够，获取所有学生数据
 */