import React from 'react';
import ReactDOM from 'react-dom';
import Ball from './poll.js'

function getRundom(min,max){
  return parseInt(Math.random()*(max-min)) + min;
}
function getRundomGg(){
  return '#'+Math.random().toString(16).substr(2,3)
}
function Polls(props){
  console.log(getRundom(0,50))
  const arr = []
   for(var i = 0; i < props.num; i++){
    arr.push(<Ball key={i} x = {getRundom(90,190)} y = {getRundom(90,190)} left = {getRundom(0,900)} top = {getRundom(0,900)} bg={getRundomGg()}/>)
   }
   return <div>{arr}</div>
}

ReactDOM.render(<div><Polls num={10}/></div>,
  document.getElementById('root')
);


