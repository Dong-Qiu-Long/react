import React, {useState,useEffect } from 'react'
import ReactDOM from 'react-dom';
import GetStudent from './hook';

function App(){
  const data = GetStudent();
  const list = data.map((it,i) => {
    return <li key={i}>姓名: {it.name} 年龄: {it.age}</li>
  })
  return <div>
    <ul>
      {list}
    </ul>
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