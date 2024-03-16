import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [state,setState]=useState("white");
  let [Status,setStatus]=useState("Off");

  function updateStateOn(){
    state="red";
    Status="On";
    setState(state);
    setStatus(Status)
  }
  function updateStateOff(){
    state="white";
    Status="Off";
    setState(state);
    setStatus(Status);

  }

  return (
    <>
    <h1>Practicing Hooks Through Toggle Button</h1>
    <button className='btn1' style={{backgroundColor:state}}>{Status}</button><br/>
    <button className='btn2' onClick={updateStateOn}>On</button>
    <button className='btn3' onClick={updateStateOff}>Off</button>
    </>
  )
}

export default App;
