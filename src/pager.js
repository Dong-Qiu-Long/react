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
	const pageNum = getPageNum(props); //总页数
	const min = getMinNumber(props); //最小页码
	const max = getMaxNumber(min , pageNum , props) //最大页码

	const numbers = []
	for(let i = min; i <= max; i++){
		numbers.push(<span 
			className={i === props.current? 'item active':'item'} 
			key={i}
			onClick={()=>{
				toPage(i,props)
			}}
		>{i}</span>)
	}

	return (
	<>
		<span 
			className={props.current === 1? 'disabled item':'item'}
			onClick = {()=>{
				toPage(1,props)
			}}
		>首页</span>	
		<span 
			className={props.current === 1? 'disabled item':'item'}
			onClick = {()=>{
				toPage(props.current-1 < 1? 1:props.current-1,props)
			}}
		>上一页</span>
		{numbers}
		<span 
			className={props.current === pageNum? 'disabled item':'item'}
			onClick = {()=>{
				toPage(props.current + 1 > pageNum? pageNum:props.current+1,props)
			}}
		>下一页</span>	
		<span 
			className={props.current === pageNum? 'disabled item':'item'}
			onClick = {()=>{
				toPage(pageNum,props)
			}}
		>尾页</span>
		<span>{props.current}</span>/<span>{props.total}</span>		
	</>)
}

/**
 * 获取总页数
 */
function getPageNum(props){
	return Math.ceil(props.total / props.limit)
}

/**
 * 
 * @param {*} target :目标页码
 * @param {*} props :所有属性
 */
function toPage(target,props){
	if(props.current === target){
		return; //目标也页码是当前页码
	}
	props.onPageChange && props.onPageChange(target);
}

/**
 * 计算最小数字
 */
function getMinNumber(props){
	let min = props.current - Math.ceil(props.pageNum / 2) ;
	if(min < 1){
		min = 1;
	}
	return min
}

function getMaxNumber(min , pageNum , props){
	let max = min + props.pageNum -1;
	if(max > pageNum){
		max = pageNum;
	}
	return max
}