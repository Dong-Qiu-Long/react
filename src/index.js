import React from 'react';
import ReactDOM from 'react-dom';
import Pager from './pager'
const obj = {
  current:1,
  total:100,
  limit:10,
  pageNum:5
}
ReactDOM.render(<div><Pager {...obj}/></div>,
  document.getElementById('root')
);


