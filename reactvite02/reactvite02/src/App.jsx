
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen m-0 p-0" style={{backgroundColor: color}}>
        <h1 className="w-full bg-blue-300">Vite + React</h1>
      </div>   
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-md bg-white p-1 rounded-full'>
          <button className='outlie-none px-4 py-1 rounded-full'
          style={{backgroundColor:"red"}} onClick={ ()=> setColor("red") }>Red</button>
           <button className='outlie-none px-4 py-1 rounded-full'
          style={{backgroundColor:"blue"}} onClick={ ()=> setColor("blue") }>Blue</button>
           <button className='outlie-none px-4 py-1 rounded-full'
          style={{backgroundColor:"orange"}} onClick={ ()=> setColor("orange") }>Orange</button>
           <button className='outlie-none px-4 py-1 rounded-full'
          style={{backgroundColor:"green"}} onClick={ ()=> setColor("green") }>Green</button>
        </div> 
      </div> 
    </>
  )
}

export default App
