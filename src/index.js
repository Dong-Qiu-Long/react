import React, { Component,PureComponent } from 'react'
import ReactDOM from 'react-dom';

class A extends Component{
  componentDidUpdate(){
    console.log('我是A我渲染了')
  }
  render(){
    return <div>我是A</div>
  }
}

class B extends PureComponent{
  componentDidUpdate(){
    console.log('我是B 我渲染了')
  }
  render(){
    return <div>我是B</div>
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      a: 0
    }
  }
  render(){
    return <div>
      <A/>
      <B/>
      <h1>{this.state.a}</h1>
      <button onClick={()=>{
        this.setState({
          a:this.state.a + 1
        })
      }}>加</button>
    </div>
  }

}

ReactDOM.render(<App/>,
  document.getElementById('root')
);


