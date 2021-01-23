import React, {useState,useEffect } from 'react'

/**
 * 当首次加载完成后获取所有学生数据
 */

 export default  function GetStudent(){
	 const [data, setData] = useState([]);
	 useEffect(()=>{
		 (async ()=>{
			await setTimeout(()=>{
				setData([
					{name:"董秋龙",age:18},
					{name:'小龙',age:19},
					{name:'龙龙',age:20}
				])
			 },1500)
		 })()
	 },[])
	 return data
 }