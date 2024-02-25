import { useState } from 'react'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='bg-red-800 h-10'></div>
      <div className='bg-blue-800 h-10'></div>
      <div className='bg-green-800 h-10'></div>
      <div className='bg-blue-800 h-10'></div>
      <div className='bg-green-800 h-10'></div>
      <div className='bg-red-800 h-10'></div>
      
    </div>
  )
}

export default App
