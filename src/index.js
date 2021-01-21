import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Input from './Context'
//创建上下文
import ctx from './createContext'
import Button from './button'

class Form extends Component {
  state = {
    fromDate:{}, //表单数据对象
    submit:()=>{
      console.log(this.state.fromDate)
    },
    changeFormData:(name,val) =>{
      this.setState({
        fromDate:{
          ...this.state.fromDate,
          [name]:val
        }
      })
    }
  }
  render(){
    const Provider = ctx.Provider;
    return <Provider value={this.state}>
        {this.props.children}
    </Provider>
  }
}

class App extends Component {
  render(){
   
    return (
      <Form>
        <>
        <div>
          账号: <Input name="loginId" />
        </div>
        <div>
          密码: <Input name="loginPwd" type="password" />
        </div>
        <div>
          <Button/>
        </div>
        </>
      </Form>
    )
  }
}

ReactDOM.render(<div><App/></div>,
  document.getElementById('root')
);


