import { useState } from 'react'
import Card from './Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('gray');

  // const colorChange = () => { setColor('red') }

  return (
    <>
      {/* <h1 className='mr-16 p-8 text-black rounded-lg bg-green-500 '>Vite + React</h1> */}
      <Card bgcolor={color}/>
      <div>
        <button className=' bg-red-500' onClick={ () => {setColor('red')}}>red</button>
        <button className=' bg-blue-500' onClick={ () => {setColor('blue')}}>blue</button>
        <button className=' bg-green-500' onClick={ () => {setColor('green')}}>green</button>
      </div>
    </>
  )
}

export default App
