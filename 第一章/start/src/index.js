import React , {useRef,useState,useEffect,useLayoutEffect}from 'react';
import ReactDOM from 'react-dom';
// class Test extends React.Component{
// 	method(){
// 		console.log("Test method called");
// 	}
// 	render(){
// 		return <h1>Test Component</h1>
// 	}
// }

// function Test(props , ref){
// 	useImperativeHandle(ref,()=>{
// 		//该函数第一次加载组件后调用
// 		//如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时，才会从新调用函数
// 		//相当于给	ref.current = 1
// 		return 1
// 	})
// 	return <h1 ref={ref}>Test Component</h1>
// }
// const TestWrapper = React.forwardRef(Test);
function App(){
	const [n,setN] = useState(0);
	const ref = useRef()
	// useEffect(()=>{
	// 	ref.current.innerText = Math.random().toFixed(2)
	// })
	useEffect(()=>{
		setTimeout(()=>{
			ref.current.innerText = Math.random().toFixed(2)
		},1000)
	})
	return (
		<div>
			<h1 ref={ref}>{n}</h1>
			<button onClick={()=>{
				setN(n+1)
			}}>调用Test组件的method方法</button>
		</div>
	)
}

ReactDOM.render(<div><App/></div>,document.getElementById('root'));