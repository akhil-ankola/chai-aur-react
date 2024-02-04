import React, { useState } from "react";

function App() {
  const[count,setcount] = useState(0);

  const adding = () => {
    setcount(count+1);
  }
  const subtract = () => {
    setcount(count-1);
  }
  
  return (
    <>
      <h1>React with Vite</h1>
      <h2>{count}</h2>
      <button onClick={adding}>+</button>
      <button onClick={subtract}>-</button>
    </>
  )
}

export default App
