import React, { Component } from 'react'
import ReactDOM from 'react-dom';

function A(props,ref){
  return <div>
    <h1 ref={props.refa} >我是h1</h1>
    {/* <span ref={ref}>我是span</span> */}
  </div>
}

const NewA = React.forwardRef(A);

class App extends React.Component{
  ARef = React.createRef();
  Span = React.createRef();
  render(){
    return <div>
      {/* <NewA ref={this.ARef} /> */}
      <A refa = {this.Span} />
      <button onClick={()=>{
        console.log(this.ARef);
        console.log(this.Span)
      }}> 获取ref</button>
      </div>
  }
}

ReactDOM.render(<div><App/></div>,
  document.getElementById('root')
);


