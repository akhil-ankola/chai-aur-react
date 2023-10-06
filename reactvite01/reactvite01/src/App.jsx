import { useState } from "react";
import './index.css';

function App() {

  let[count,setCout] = useState(10);
  
  const increment = () => {
    if(count<20){
      setCout(count+1);
    }
  }
  const decrement = () => {
    if(count>0){
      setCout(count-1);
    }
  }

  return (
    <>
      <h1>count is : {count}</h1>
      <button onClick={increment}>increament {count}</button>
      <button onClick={decrement}>decrement {count}</button>
      <p>{count}</p>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    </>
  )
}

export default App
