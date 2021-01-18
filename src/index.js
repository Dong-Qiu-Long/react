import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './time.jpg';
import img2 from './family.jpg';

//图片数组
const arrImg = [img1,img2];
//计数器
let index = 0;
//定时器
let times = null;
// 开始轮播
function timeFun(){
  times = setInterval(function(){
    index++
    const div = (<div style={{
      width:500,
      height:400,
      border:'1px solid #ccc'
    }}
    onMouseLeave={()=>{
      console.log('开始了');
      timeFun()
    }}
    onMouseOver = {()=>{
      console.log('停止了');
      clearInterval(times)
    }}
    >
      <img style={{
        width:'100%'
      }} src={arrImg[index%2]} alt=""/>
    </div>)
    ReactDOM.render(div,
      document.getElementById('root')
    );
  },2000)
}
timeFun()


