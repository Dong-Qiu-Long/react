import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dva from 'dva';
import counterModel from './counter'
const app = dva();
/**
 * 设置跟路由，启动后要运行的函数，自动渲染节点
 */
console.log(App)
app.router(()=><App/>);

/**
 * 在启动之前定义模型
 * 传入一个模型
 * 模型可以抽离
 * 模型中可以写
 * namespace:命名空间，是字符串，字符串会被作为属性保存
 * state:该模型的默认值
 */
app.model(counterModel)

/**
 * 该方法用于启动程序，可以认为启动的就是react程序，该函传入一个选择器，用于选中页面中的
 * 某个dom元素，react会将内容渲染到该元素内部
 */
app.start(document.getElementById('root'))

