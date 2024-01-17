import { useState } from 'react'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Landing  from './Pages/Landing'


function NavBar(){
  console.log("Nav bar rerenders");
  const nav = useNavigate();
  return <>
  <div>
      <button onClick={()=>{
        nav('/');
      }}>
        Landing Page
      </button>
      <button onClick={()=>{
        nav('/dashboard');
      }}>
        Dashboard Page
      </button>
    </div>

  </>
}

function App() {
  // const [count, setCount] = useState(0)
  console.log("rerenders");
  return (
    <>

    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
