import React from 'react';
import ReactDOM from 'react-dom';
import Poll from './Poll.js';
// import MyFuncCompb from './MyFuncComp.js';
// import MyClassComp from './MyClassComp.js'
// import img1 from './assets/photo-1.jpg';
// import img2 from "./assets/photo-2.jpg";
// import img3 from "./assets/photo-3.jpg";
// import img4 from "./assets/photo-4.jpg";
// import './index.css'
// const arr = [img1,img2,img3,img4];
// let num = 0;
// let trims = null;

// function start(){
// 	trims = setInterval(function(){
// 		num++	
// 		const div = (<>
// 			<img src={arr[num % 4]} alt=""/>
// 		</>)
// 		ReactDOM.render(div,document.getElementById('root'));
// 	},1000)
// }
// start()
// const dom = document.getElementById('root');
// dom.onmouseenter = function(){
	
// 	clearInterval(trims)
// }

// dom.onmouseleave = function(){
// 	start()
// }
// function MyFuncComp(){
// 	return <h1>我是组件</h1>
// }
// const div = (<div><button onClick={onclicks}>按钮</button></div>);
// function onclicks(){
// 	console.log(1)
// }
ReactDOM.render(<div><Poll num={10}/></div>,document.getElementById('root'));