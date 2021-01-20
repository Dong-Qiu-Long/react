import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Hoc from './Hoc';
import Hob from './Hod';
//高阶函数

//HOF:Higher-Order Function,高阶函数，以函数作为参数，并返回一个函数
//HOC：Higher-Order Component, 高阶组件，以组件作为参数，并返回一个组件

/**
 * class Comp{ //组件
 * 
 * }
 * <Comp/> //元素
 */
//通常，可以利用HOC事项横切关注点
//举例:20个组件，每个组件在创建组件和销毁组件时，需要作日子记录
//20个组件，他们需要显示一个内容，得到的数据结构完全一致


function A(props){
	return <h1>董秋龙{props.a}</h1>
}

function B(){
  return <h1>又又</h1>
}

function C(){
  return <h1>小双</h1>
}

let CompA = Hoc(A);
 CompA = Hob(CompA)
const CompB = Hoc(B)
const CompC = Hoc(C)

ReactDOM.render(<div><CompA a = '加油' isLongin={true}/><CompB isLongin={true} /><CompC isLongin={true}/></div>,
  document.getElementById('root')
);


