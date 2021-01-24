import React, {useState,useEffect,useCallback} from 'react'
import ReactDOM from 'react-dom';
import { SwitchTransition ,CSSTransition } from 'react-transition-group';
import "./App.css"
// const duration = 300;

// const defaultStyle = {
//  transition: `opacity ${duration}ms ease-in-out`,
//  fontSize:"40px",
//  transition:"0.5s"
// }

// const transitionStyles = {
//  entering: {marginLeft:"300px",color:"#a45"},
//   entered:  {marginLeft:"0px",color:"#000"},
//   exiting:  {marginLeft:"0px",color:"#000"},
//   exited:  {marginLeft:"300px",color:"#a45"},
// };

// function App() {
//   const [inProp, setInProp] = useState(false);
//   return (
//     <div className='box'>
//       <Transition in={inProp} timeout={2000}>
//         {state => {
//           console.log(state);
//           return <div
//           //style={{
//          //  ...defaultStyle,
//          //  ...transitionStyles[state]
//          // }}
//          className={state} //可以切换类名的方式切换动画
//          >
//            <h1>I'm a fade Transition!</h1>
//          </div>
//         }
//         }
//       </Transition>
//       <button onClick={() => setInProp(!inProp)}>
//         显示隐藏
//       </button>
//     </div>
//   );
// }

  // function App(){
  //   const [self, setSelf] = useState(true);
  //   return <div>
  //     {/* classNames="test" :添加前缀 */}
  //     <CSSTransition   timeout={2000} in={self}>
  //       <h1>董秋龙</h1>
  //     </CSSTransition>
  //     <button onClick={()=>{
  //       setSelf(!self)
  //     }}>切花</button>
  //   </div>
  // }

  function App(){
    const [self, setSelf] = useState(true);
    return (
      <div>
        <SwitchTransition>
          <CSSTransition timeout={2000} key={self}>
            <h1>董秋龙</h1>
          </CSSTransition>
        </SwitchTransition>
        <button onClick={
          ()=>{
            setSelf(!self)
          }
        }>切换</button>
      </div>
    )
  }


ReactDOM.render(<App/>,
  document.getElementById('root')
);