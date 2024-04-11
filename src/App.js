import React, { useState ,useEffect ,useCallback,useRef} from "react";
import { UserState } from "react";


function App() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  
  const passwordRef = useRef(null);

  const passGen =() => {

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for(let i = 1; i <=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass+=str.charAt(char);
    }
    console.log(charAllowed+"chjkkjkfdkdff");
    console.log(pass+" Password");
     setPassword(pass);

  };

  useEffect(() => {
    passGen();
  }, [length, numAllowed, charAllowed,setPassword])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={()=>{
            passwordRef.current?.select();
            window.navigator.clipboard.writeText(password);
          }}
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={4}
            max={100}
            value={password}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           defaultChecked={charAllowed}
           id="characterInput"
           onChange={() => {
               setCharAllowed((prev) => !prev )
           }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
