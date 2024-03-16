import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const[count,setCounter]=useState(0);
  let func=useRef(true);
  //let a=3;
  let a=useRef(2);
  console.log("rendered");

  useEffect(()=>{   //ek afa component mount hunay pe call huta aur dusra count ki state change hunay pe
    if(func.current){
      console.log("a",a.current);
      //func.current=false;
    }
  },[count])

  function addValue(){
    let val=count+1;
    a.current=a.current+1;
    console.log("i am a",a);
    setCounter(val);   //this re renders component
  }
  
  return<>
  <button onClick={addValue}>Add value {count}</button>
  </>






  

  
}

export default App;
//input: checkbox,range,useCallback hook,useEffect hook,useRef