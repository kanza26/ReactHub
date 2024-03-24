
import React, { useState } from 'react'
import UseTheme from '../context/themeContext';

export default function ThemeBtn(){
    const [checked,setCheck]=useState(false);
    const {darkTheme,lightTheme}=UseTheme();
    const handler = () => {
        setCheck(prevState => !prevState);
        if (checked) {
            darkTheme();
        } else {
            lightTheme();
        }
    }
    return (
        <div className='w-300 bg-white h-30 dark:bg-black'>
            <div className='relative w-16 h-7 rounded-3xl flex justify-center items-center  top-0.5 left-56'>
            <label htmlFor='slider' className={`absolute w-full h-full rounded-3xl left-0 ${checked ? 'bg-blue-400' : 'bg-slate-300'} `} >


                <span className={`absolute w-1/2 h-3/4 left-1 bottom-1 top-1 bg-white rounded-3xl ${checked ? 'translate-x-6' : ''} `}></span>
                </label>
                <input checked={checked}  id='slider' type='checkbox' onChange={handler}>
                </input>
            </div>
        </div>
    )
}