import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [from, setFrom] = useState();
  const [To, setTo] = useState();
  const [convertedAmount, setConvertedAmount] = useState();



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/pkr.json'
        );
        const data = await response.json();
        setCurrencyOptions(Object.keys(data.pkr).slice(6,));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  async function Findrate(From,to){
    try {
      const response1 = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${From}.json`
      );
      const data1 = await response1.json();
      const obj = data1[From];
      const rate = obj[to];
      
      if (!isNaN(rate) || !isNaN(value)) { // Check if rate or value is a valid number
          const calculatedamount = `${rate * value} ${to}`;
          setConvertedAmount(calculatedamount);
      } else {
          setConvertedAmount("Enter valid number");
      }
    } catch (error) {
      setConvertedAmount('Invalid value');
  }

  }
  

  return (
    <div className='bg-green-200 absolute top-0 left-0 min-h-full min-w-full flex items-center justify-center'><img className="absolute h-full w-full "src="im2.webp"></img>
      <div className='absolute top-0 left-0 h-20 w-full bg-black  text-white flex justify-center items-center text-2xl'>CURRENCY CONVERTER</div>
      <div className='bg-gradient-to-r from-blue-200 via-purple-100 to-pink-200 absolute h-1/2 min-w-56  flex flex-col'>
        <input
          className='absolute w-3/4 left-5 top-5'
          placeholder='Enter a number'
          onChange={(e) => setValue(e.target.value)}
        />
        <div className='absolute w-1/2 left-5 h-6 top-20 bg-pink-300   rounded-md'>
             From
        <select className="absolute right-0 w-14 rounded-md" onChange={(e)=>{setFrom(e.target.value)}}>
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        </div>
        <div className='absolute w-1/2 left-5 h-6 top-32 bg-purple-400 rounded-md' onChange={(e)=>{setTo(e.target.value)}}>
        To
        <select className="absolute right-0 w-14 rounded-md">
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        </div>
        <button onClick={()=>{
          Findrate(from,To)
        }} className='absolute top-44 rounded-xl hover:bg-blue-600 w-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 left-5 box-border border-blue-700 border-4'>Convert</button>

        <label className='absolute top-56  bg-white w-3/4 h-1/4 flex justify-center items-center   left-5'>{convertedAmount} </label>
        
      </div>
    </div>
  );
}

export default App;




