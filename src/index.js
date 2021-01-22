import React, { Component,PureComponent } from 'react'
import ReactDOM from 'react-dom';

function ChildA(){
  return <div className="child-a">
    我是A
    <ChildB/>
  </div>
}
function ChildB(){
  const div =  <div className="child-b">
    我是B
  </div>
  return ReactDOM.createPortal(div,document.querySelector('#main'))
}

function App(){
  return (
    <div className="app">
      我是App
      <ChildA/>
    </div>
  )
}

ReactDOM.render(<div><App/></div>,
  document.getElementById('root')
);


