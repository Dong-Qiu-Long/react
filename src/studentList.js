import React from 'react';
export default function StudentList({list}){
	const datas = list.map((data)=>{
		return <li key={data.id}>姓名:{data.name}</li>
	})
	return <div><ul>{datas}</ul></div>
}