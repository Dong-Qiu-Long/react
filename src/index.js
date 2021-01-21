import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import withLog from './Hoc';

function A(props,ref){
  return <div>
    <h1 ref={props.refa} >我是h1</h1>
    {/* <span ref={ref}>我是span</span> */}
  </div>
}

function B(props,ref){
  console.log(ref)
  return <div>
    <h1 ref={ref}>我是b</h1>
  </div>
}
// class B extends React.Component {
//   render(){
//     return <div></div>
//   }
// }
const Bhoc = withLog(B);

const NewA = React.forwardRef(A);

class App extends React.Component{
  ARef = React.createRef();
  Span = React.createRef();
  Isb = React.createRef();
  render(){
    return <div>
      {/* <NewA ref={this.ARef} /> */}
      <A refa = {this.Span} />
      <button onClick={()=>{
        console.log(this.ARef);
        console.log(this.Span);
        console.log(this.Isb)
      }}> 获取ref</button>
      <Bhoc ref={this.Isb} />
      </div>
  }
}

ReactDOM.render(<div><App/></div>,
  document.getElementById('root')
);


