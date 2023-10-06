
import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
const [length, setLength] = useState(8);
const[numberAllowed, setNumberAllowed] = useState(false);
const[specialCharAllowed, setSpecialCharAllowed] = useState(false);
const[password, setPassword] = useState("");

//useRef
const passwordRef = useRef(null);

const copyPassword = () => {
  //for show password is selcted
  passwordRef.current?.select();
  //for only select specifick items
  passwordRef.current?.setSelectionRange(0,20);
  //code for onclick copy event
  window.navigator.clipboard.writeText(password);

  console.log(passwordRef);
}

const passwordGenerator = useCallback( () => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(specialCharAllowed) str += "!@#$%^&*()_"

  for(let i=0; i<=length; i++){
    let char = Math.floor(Math.random()*str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
} , [length, numberAllowed, specialCharAllowed, setPassword])

useEffect( ()=>{
  passwordGenerator();
}, [length, numberAllowed, specialCharAllowed,passwordGenerator] )

  return (
    <>
      <div className=' max-w-2xl m-auto mt-10 bg-gray-700 align-middle text-center px-10 pb-10 text-white rounded-lg'>
        <h1 className='p-5'>Password Generator</h1>
        <div className='flex text-sm'>
          <input 
          type='text' 
          value={password}
          className=' outline-none w-full py-0 text-orange-500 p-2 rounded-l-md font-semibold'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPassword} 
            className='p-3 bg-blue-600 text-neutral-100 rounded-r-md'>Copy</button>
        </div>
        <div className=' flex text-sm gap-x-2 mt-5 justify-between'>
          <div className=' flex items-center gap-x-1'>
            <input type='range' 
            min={5}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={ (e)=>{setLength(e.target.value)} }
            />
            <label className=' text-white'>Length : {length}</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numbeInput'
              onChange={ ()=>{
                setNumberAllowed( (prev) => !prev );
              } }
            />
            <label className=' text-white'>Numbers</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='charInput'
              onChange={ ()=>{
                setSpecialCharAllowed( (prev) => !prev );
              } }
            />
            <label className=' text-white'>Special_char</label>
          </div>
        </div>
      </div>   
    </>
  )
}

export default App
