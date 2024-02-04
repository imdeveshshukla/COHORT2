import { useState } from 'react'
import './App.css'
import Assignment1 from './components-Assignment/Assignment1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Assignment1/> 
    </>
  )
}

export default App
