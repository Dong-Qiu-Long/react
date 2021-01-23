import React, {useState,useEffect ,useContext} from 'react'
import ReactDOM from 'react-dom';

const ctx = React.createContext();
function Test(){
  const val = useContext(ctx)
  return <div><A/> 我是Test {val}</div>
}

function A(){
  return <div><ctx.Consumer>
      {(value)=>{ 
        return <h1>{value}</h1>
      }}
    </ctx.Consumer></div>
}


function App(){
 return <div>
   我是App
   <ctx.Provider value={2}>
      <Test/>
   </ctx.Provider>
 </div>
}

ReactDOM.render(<App/>,
  document.getElementById('root')
);

