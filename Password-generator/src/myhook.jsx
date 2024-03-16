import { useState, useCallback, useEffect, useRef } from 'react';

function MyApp() {
    const [length, setLength] = useState(8);
    const [number, setNumberAllowed] = useState(false);
    const [char, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const [pass, setPass] = useState("");
    let con=useRef(3);

    const passwordGenerator = useCallback(() => {
        console.log("called");
        let str = "AbcdefghiklmnopqrstuvwxyzABCDEFGHIJKLLMNOPQRSTUVWXYZ";
        if (number) {
            str = str + "1234567896794567";
        }
        if (char) {
            str = str + "@#$%&*!#&@!&*";
        }
        let generatedPass = "";
        con.current=con.current+1;
        console.log(con.current);
        for (let i = 0; i < length; i++) {
            let num = Math.floor(Math.random() * str.length);
            generatedPass = generatedPass + str.charAt(num);
        }
        setPass(generatedPass);
    }, [number, char, length]);

    useEffect(() => {
        passwordGenerator();
    }, [length, char, number]);

    const generate = () => {
        passwordGenerator();
        setPassword(pass);
    };

    return (
        <div className='absolute bg-purple-200 min-w-full min-h-full flex justify-center  font-bold'><img src='im3.jpg'></img>
            <div className='absolute flex-col h-1/2 w-1/2 items-center '>
                <h1 className='absolute text-3xl left-1/4 top-5'>Password Generator</h1><br></br>
                <input type='text' placeholder='Password' value={password} className='absolute top-20 min-w-full'></input><br></br>
                <input className='absolute left-1/4 top-30' id="len" type="range" min={5} max={50} value={length} onChange={(e) => { setLength(e.target.value) }} ></input><br></br>
                <label htmlFor='len' className='absolute left-1/4 top-40'>length: {length}</label><br></br>
                <div className='absolute top-50 left-1/4'>
                    <input type="checkbox" checked={number} onChange={() => setNumberAllowed(!number)}></input>
                    <label>Include numbers</label>
                </div>
                <div className='absolute top-60 left-1/4'>
                    <input type="checkbox" checked={char} onChange={() => setCharAllowed(!char)}></input>
                    <label>Include characters</label>
                </div>
                <button onClick={generate} className='absolute top-80 left-1/4 bg-blue-200 hover:bg-blue-500 border-cyan-700 box-border rounded-md border'>Generate Password</button>
            </div>
        </div>
    );
}

export default MyApp;
