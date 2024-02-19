import { useState,useEffect } from 'react'
import './App.css'
import { data } from './Data/Details'
import Assignment1 from './components-Assignment/Assignment1'
import Assignment2 from './components-Assignment/Assignment2'
import Assignment3 from './components-Assignment/Assignement3'
import Assignment4 from './components-Assignment/Assignment4'
function App() {
  const [count, setCount] = useState(0)
  const [updup, hey] = useState("");

  const [profile,setProf] = useState(null);
  useEffect(() => {
      fetch("https://api.github.com/users/imdeveshshukla")
      .then(res => res.json())
      .then(d => setProf(d))
  }, [])
  
  return (
    <div className='outerItems'>
    {/* <div className='items'>
      {data.map((val)=><Assignment1 key={val._id} data={val}/>)}
    </div>
      <Assignment2/>*/}
      
      {/* <Assignment3/>  */}
    
      <Assignment4 profile={profile}/>

    </div>
  )
}

export default App
