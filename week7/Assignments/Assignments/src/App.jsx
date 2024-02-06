import { useState } from 'react'
import './App.css'
import { data } from './Data/Details'
import Assignment1 from './components-Assignment/Assignment1'
import Assignment2 from './components-Assignment/Assignment2'
function App() {
  const [count, setCount] = useState(0)


  return (


    <div className='items'>
      {data.map((val)=><Assignment1 key={val._id} data={val}/>)}
      <Assignment2/>
    </div>
  )
}

export default App
