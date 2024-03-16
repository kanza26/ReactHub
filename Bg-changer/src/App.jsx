import { useState } from 'react';
import './App.css';

function App() {
  const [bgcolor, setBgcolor] = useState('bg-orange-100');

  function bgcolr(color) {
    // Use the color variable to create the new state value
    const newBgColor = color;
    
    // Pass the new state value to setBgcolor
    setBgcolor(newBgColor);
  }

  return (
    <div className={`absolute min-w-full min-h-full left-0 top-0 ${bgcolor}`}>
      <h1 className='text-3xl mt-10'>Backgound-Color-changer</h1>
      <div className='bg-white min-h rounded-3xl flex justify-evenly items-center bottom-2 left-52'>
        <button onClick={() => bgcolr("bg-red-500")} className='min-w-90 rounded-2xl bg-red-500'>Red</button>
        <button onClick={() => bgcolr("bg-green-500")} className='min-w-90 rounded-2xl bg-green-500'>Green</button>
        <button onClick={() => bgcolr("bg-blue-500")} className='min-w-90 rounded-2xl bg-blue-500'>Blue</button>
        <button onClick={() => bgcolr("bg-yellow-600")} className='min-w-90 rounded-2xl bg-yellow-600'>Olive</button>
        <button onClick={() => bgcolr("bg-gray-500")} className='min-w-90 rounded-2xl bg-gray-500'>Gray</button>
        <button onClick={() => bgcolr("bg-yellow-500")} className='min-w-90 rounded-2xl bg-yellow-500'>Yellow</button>
        <button onClick={() => bgcolr("bg-pink-400")} className='min-w-90 rounded-2xl bg-pink-400'>Pink</button>
        <button onClick={() => bgcolr("bg-purple-500")} className='min-w-90 rounded-2xl bg-purple-500'>Purple</button>
        <button onClick={() => bgcolr("bg-purple-200")} className='min-w-90 rounded-2xl bg-purple-200'>Lavinder</button>
        <button onClick={() => bgcolr("bg-white")} className='min-w-90 rounded-2xl bg-white'>White</button>
        <button onClick={() => bgcolr("bg-black")} className='min-w-90 rounded-2xl bg-black text-white'>Black</button>
      </div>
    </div>
  );
}

export default App;
