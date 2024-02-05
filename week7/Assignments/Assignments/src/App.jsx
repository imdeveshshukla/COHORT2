import { useState } from 'react'
import './App.css'
import { data } from './Data/Details'
import Assignment1 from './components-Assignment/Assignment1'
function App() {
  const [count, setCount] = useState(0)


  return (


    <div className='items'>
      {data.map((val)=><Assignment1 key={val._id} data={val}/>)}
        {/* <Assignment1 
        key={data[0].id}
        data={data[0]}/> 
        <Assignment1 
        key={data[1].id}
        data={data[1]}/>  */}
    </div>
  )
}

export default App
