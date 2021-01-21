import React, { Component } from 'react'
import ctx from './createContext'

export default function FormButton(){
	const Consumer = ctx.Consumer
	return (
		<Consumer>
			{(ctx)=>{
				return <button onClick = {()=>{
					ctx.submit();
				}}>提交</button>
			}}
		</Consumer>
	)
}
