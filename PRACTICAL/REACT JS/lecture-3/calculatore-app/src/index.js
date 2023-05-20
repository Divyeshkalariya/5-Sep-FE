import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {add,sub,mul,divi,mod} from './components/components';


function App(){
  return(
    <>
      <div className='main'>
        <div className='head'>
          <h1>Calculatore</h1>
          <hr/>
        </div>
        <div className='contaent'>
          <button type='button' onClick={add}>Addition</button>
          <button type='button' onClick={sub}>Substraction</button>
          <button type='button' onClick={mul}>Multiplication</button>
          <button type='button' onClick={divi}>Divison</button>
          <button type='button' onClick={mod}>Modules</button>
        </div>
      </div>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("calculatore"));
root.render(<App/>);
