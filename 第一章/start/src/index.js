import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router ,Route , Switch ,Link} from 'react-router-dom'

function A({match}){
  // console.log(props.match.path)
  return <div>
    <Link to={`${match.url}/b`}>转到D</Link>
    <Link to={`${match.url}/c`}>转到C</Link>
     <Route path={`${match.url}/b`}   component={D}/>
     <Route path={`${match.url}/c`}   component={C}/>
  </div>
}
function D(){
  return <div>D</div>
}

function B(){
  return <div>B</div>
}
function C(){
  return <div>C</div>
}
function App(){
  return (<div>
    <Router>
        <Route path="/aa"component={A}></Route>
        {/* <Route path="/b" component={B}/>
        <Route path="/c"   component={C}/> */}
    </Router>
  </div>)}
ReactDOM.render(<div><App /></div>, document.getElementById('root'));