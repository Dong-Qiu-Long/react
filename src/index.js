import React from 'react';
import ReactDOM from 'react-dom';
import Times from './times.js'
class NumBtn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num:0
    }
  }
  render(){
    return <div>
      <button onClick={()=>{
        this.setState({
          num:this.state.num -1
        })
      }}>减</button>
      <p>{this.state.num}</p>
      <button onClick={()=>{
        this.setState({
          num:this.state.num + 1
        })
      }}>加</button>
    </div>
  }
}

class A extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      self:false
    }
  }
  end(){
    this.setState({
      self:true
    })
  }
  render(){
    return <div>
      <Times onVer = {this.end.bind(this)}/>
      <h1>{this.state.self? '倒计时完成':'正在倒计时'}</h1>
    </div>
  }
}

ReactDOM.render(<div><NumBtn/><A/></div>,
  document.getElementById('root')
);


