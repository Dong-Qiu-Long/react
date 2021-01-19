import React from 'react';
import ReactDOM from 'react-dom';
import Pager from './pager'

class PagerTest extends React.Component {
  constructor(props){
  super(props)
   this.state = {
      current:5,
      total:100,
      limit:10,
      pageNum:5
    }
  }
  handlePageChange = (current)=>{
    this.setState({
      current,
    })
  }
  render() {
    return (
      <>
        <Pager {...this.state} onPageChange={this.handlePageChange} />
      </>
    )
  }
}

ReactDOM.render(<div><PagerTest/></div>,
  document.getElementById('root')
);


