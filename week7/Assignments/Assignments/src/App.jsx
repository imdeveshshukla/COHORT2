import { useState,useEffect } from 'react'
import './App.css'
import { data } from './Data/Details'
import Assignment1 from './components-Assignment/Assignment1'
import Assignment2 from './components-Assignment/Assignment2'
import Assignment3 from './components-Assignment/Assignement3'
import Assignment4 from './components-Assignment/Assignment4'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components-Assignment/Home'
function App() {
  const [count, setCount] = useState(0)
  const [updup, hey] = useState("");

  
  return (
    <nav className='NavigationBar'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Assignment1" element={<Assignment1/>}/>
          <Route path="/Assignment2" element={<Assignment2/>}/>
          <Route path="/Assignment3" element={<Assignment3/>}/>
          <Route path="/Assignment4" element={<Assignment4/>}/>
        </Routes>
      </BrowserRouter>
    </nav>
  )
  {/* <div className='outerItems'>
 <div className='items'>
   {data.map((val)=><Assignment1 key={val._id} data={val}/>)}
 </div>
   <Assignment2/>
   
   <Assignment3/> 
 
   <Assignment4 profile={profile}/>

 </div> */}
}

export default App
