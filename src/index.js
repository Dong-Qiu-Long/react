import React from 'react';
import ReactDOM from 'react-dom';

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


ReactDOM.render(<div><NumBtn/></div>,
  document.getElementById('root')
);


