import React, { useState, useCallback, useRef } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  console.log('hi i am rendered');




  const decrement =useCallback( () => {                 
    setCount(prevCount => prevCount + 1);
  },[]); 

  /*const decrement =() => {                  //upon clicking button count is updated and component rerenders and decrement is re created everytime it renders 
    setCount(prevCount => prevCount + 1);
  }; */
  
  let a=useRef(decrement);               //stores address of decrement function first timw when component renders
  console.log(a.current===decrement);     //campares that address of first time after each re render, with simple function without useCallback it gives 
                                     //false bcz function is recreated to referential equality gives false bcz reference in mem changes but with callback
  return (                     // it gives true bcz function is being created only once in the first render and then no function is recreated in re renders
    <div>                           
      <h1>Counter: {count}</h1>
      <ChildComponent handleClick={()=>setCount(count+1)} />
    </div>
  );
}

function ChildComponent({ handleClick }) {
  return (
    <button onClick={handleClick}>Increment</button>
  );
}

export default ParentComponent;


//whenever state of any variable is changed the whole component re renders for example i have two buttons and i have clicked one button bcz of which a function is called within which state of variable is updated then react will think there is some change and it will re render whole component, upon re rendering all other functions related to other buttons are also re re created to in order to avoid their recreation until any change in the state of their dependency is observed