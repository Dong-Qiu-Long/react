import React , {useContext}from 'react';
import ReactDOM from 'react-dom';

const ctx = React.createContext();

function Test(){
	const value = useContext(ctx)
	return <h1>{value}</h1>
}
function Func(){
	return(
		<div>
			<ctx.Provider value="456">
				<Test/>
			</ctx.Provider>
		</div>
	)
}
ReactDOM.render(<div><Func/></div>,document.getElementById('root'));