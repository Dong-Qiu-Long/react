import React , {useRef,useState,useEffect,useLayoutEffect}from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	fontSize:"40px",
	transition:"0.5s"
}

const transitionStyles = {
	entering: {marginLeft:"300px",color:"#a45"},
  entered:  {marginLeft:"0px",color:"#000"},
  exiting:  {marginLeft:"0px",color:"#000"},
  exited:  {marginLeft:"300px",color:"#a45"},
};

function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <Transition in={inProp} timeout={200}>
        {state => (
          <div style={{
						...defaultStyle,
						...transitionStyles[state]
					}}>
						<h1>I'm a fade Transition!</h1>
					</div>
        )}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>
        显示隐藏
      </button>
    </div>
  );
}
ReactDOM.render(<div><App/></div>,document.getElementById('root'));