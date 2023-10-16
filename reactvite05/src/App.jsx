import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className=' bg-slate-500'>Vite + React</h1>
      <Header/>
    </>
  )
}

export default App
