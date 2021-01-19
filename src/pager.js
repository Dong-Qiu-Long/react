import React, { Component } from 'react'
import './index.css'
/**
 * 分页组件
 * 1.current:初始页码
 * 2.total:总数量
 * 3.limit:每页数据量
 * 4.pageNum:每页显示多少个
 */
export default function Pater(props){
	const pageNum = getPageNum(props);
	console.log(pageNum)
	return (
	<>
	<span className={props.current === 1? 'disabled item':'item'}>首页</span>	
		<span className={props.current === 1? 'disabled item':'item'}>上一页</span>
		<span className={props.current === pageNum? 'disabled item':'item'}>下一页</span>	
		<span className={props.current === pageNum? 'disabled item':'item'}>尾页</span>
		<span>{props.current}</span>/<span>{props.total}</span>		
	</>)
}

/**
 * 获取总页数
 */
function getPageNum(props){
	return Math.ceil(props.total / props.limit)
}
