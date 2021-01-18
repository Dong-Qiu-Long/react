import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './studentList.js'

var appkey = "demo13_1545210570249";

async function fetchAllStudents(){
  var stus = await fetch("http://api.duyiedu.com/api/student/findAll?appkey="+appkey)
  .then(data => data.json()).then(resp => resp.data);
  return stus
}
async function render(){
  ReactDOM.render(<h1>正在加载中....</h1>,
    document.getElementById('root')
  )
  const list = await fetchAllStudents()
  ReactDOM.render(<div><StudentList list={list} /></div>,
    document.getElementById('root')
  )
};
render()

