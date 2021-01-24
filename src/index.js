import React, {useState,useEffect,useCallback} from 'react'
import ReactDOM from 'react-dom';
import { SwitchTransition ,CSSTransition } from 'react-transition-group';
import {HashRouter ,BrowserRouter as Router,Route , Switch,Link,NavLink,Redirect} from 'react-router-dom'
//路由组件

//Router 组件
//它本身不做任何展示，仅提供路由模式配置，另外，该组件会产生一个上下文，上下文中会提供一些使用的对象
//和方法
//1.HashRouter:该组件，使用hash模式配置
//2.BrowserRouter:该组件，使用BrowserHistory模式配置
//通常情况下router只有一个
//Route 组件
/**
 * 根据不同的地址展示不同的组件
 * 重要属性：
 * 1.path:匹配的路径
 *  1.sensitive : 匹配路径区分大小写
 *  2.exact : 精确匹配
 *  3.如果不写path不匹配任意路径
 * 2.component：匹配成功后要显示的组件
 */

 /**
  * Switch组件
  * 写到Switch组件中的Route组件，当匹配到
  */
function A(props){
  const path = props.match.url;
  console.log(path)
  return <div>
    <h1>A</h1>
    <Link to={path+'/d'}>去d</Link>
    <Link to={path+'/b'}>去b</Link>
    <Link to={path+'/c'}>去c</Link>
    <div>
    <Route path={path+'/d'} component={D}/>
    <Route path={path+'/b'} component={B}/>
    <Route path={path+'/c'} component={C}/>
    </div>
  </div>
}
function D(){
  return <div>我是D</div>
}

function B(){
  return <div>
    <h1>B</h1>
    <NavLink to="/a">我是a</NavLink>
  </div>
}

function C(){
  return <h1>C</h1>
}

function App(){
  return (
    <Router>
      <Switch>
        <Route path='/e' component={A}></Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App/>,
  document.getElementById('root')
);

/**
 * 路由信息
 * history
 * 它并不是Window.history对象，我们利用对象无刷新跳转地址
 * 为什么没有直接使用history对象
 *  1.因为React.Router有两种模式:Hash， History，如果直接使用window.history，只能支持
 * 一种模式
 * 2.当使用window.history.pushState方法时，没有办法接受到任何通知
 *    导致React无法知晓地址变化，结果导致无法重新渲染组件
 * 
 * props.history.push('/b');
 * push:将某个新的地址入栈，(历史记录栈)
 *    参数一:新的地址
 *    参数二:状态数据  获取状态数据:props.history.location.state
 * replace:替换无法返回
 * go():与window方法一样
 * forward():与window方法一样
 * back(): 与window方法一样
 * 
 * location
 * 与history.location完全一致。是同一个对象，但是，与window.location不同
 * location对象中记录了当前地址相关信息
 * 我们通常使用第三方库:```query-string```,用于解析地址栏中的数据
 * import qs from 'query-string'
 * qs.parse(props.location.search)
 * 
 * match:路由匹配相关信息
 * 
 * 
 * 
 */