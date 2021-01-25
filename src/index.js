import React, { useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { HashRouter, BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import './App.css'
import 'animate.css'
function App() {
  return (
    <div className="main">
      <Router>
        <Route path="/" component= {Come}/>
      </Router>
    </div>
  )
}

const className = {
  enter:"animate__backInRight",
  exit:"animate__backOutLeft"
}

function Come() {
  return (
    <div className="box">
      <div className="nav">
        <NavLink to="/" exact>个人中心</NavLink>
        <NavLink to="/login">登录</NavLink>
        <NavLink to="/home">首页</NavLink>
      </div>
      <div className="page">
        <Route path="/" exact>
          {({match})=>{
            return <CSSTransition classNames={className} in={match? true:false} timeout={1000} mountOnEnter={true} unmountOnExit={true}>
              <A/>
            </CSSTransition>
          }}
        </Route>
        <Route path="/login">
          {({match})=>{
              return <CSSTransition classNames={className} in={match? true:false} timeout={1000} mountOnEnter={true} unmountOnExit={true}>
                <B/>
              </CSSTransition>
           }}
          </Route>
        <Route path="/home">
          {({match})=>{
              return <CSSTransition classNames={className} in={match? true:false} timeout={1000} mountOnEnter={true} unmountOnExit={true}>
                <C/>
              </CSSTransition>
          }}
          </Route>
      </div>
    </div>
  )
}

function A(){
  return <div className="personage animate__animated">个人中心</div>
}

function B(){
  return <div className="login animate__animated">登录</div>
}

function C(){
  return <div className="home animate__animated">首页</div>
}

ReactDOM.render(<App />,
  document.getElementById('root')
);

/**
 * 导航守卫
 * 概念:当离开一个页面，进入另一个页面时，触发的事件
 * history对象
 */