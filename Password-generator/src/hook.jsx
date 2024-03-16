import React, { useState, useCallback, useEffect, useRef } from 'react';

function Hook(){
    const [count,setCount]=useState(1);
    let val=useRef(true);
    const [a,seta]=useState(1);
    const func=useCallback(()=>{
        seta(a+1);
    },[count])

    useEffect(()=>{
        if(val.current){
            console.log("seEffect hook called");
            val.current=false;
        }

    },[count])

    function addvalue(){
        setCount(count+1);
    }

    
    return<>
    <button onClick={addvalue}>Button {count} </button>
    <button onClick={func}>a {a}</button>
    
    </>

}

export default Hook;