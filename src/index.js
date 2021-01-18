import React from 'react';
import ReactDOM from 'react-dom';
import Fun from './fun.js'
import ClassFun from './classFun.js'
const h1 = <h1>函数组件</h1>
const div = (<div><Fun html = {h1} num = {2}/><ClassFun nameDong="董秋龙"/></div>)

ReactDOM.render(div,
  document.getElementById('root')
);

