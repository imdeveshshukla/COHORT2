import React , { useState,lazy,Suspense, useContext } from 'react'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import './App.css';

const Dashboard = lazy(()=>import('./Pages/Dashboard'));
const Landing = lazy(()=>import('./Pages/Landing'));
// import Landing  from './Pages/Landing'

import {CountContext} from './Context.jsx';



function App() {
  const [c, setC] = useState(0)

  //Suspense APi
  //Wrap the outer component with context provider to teleport the value and pass that value Context.Provider
  console.log("rerenders");
  return(
    <>
      <CountContext.Provider value={{c, setC}}>
          <Count/>
      </CountContext.Provider>
    </>
  )
  
}

function Count(){
  return (
    <div>
      <Countrenderer></Countrenderer>
      <Button></Button>
    </div>
  )
}


function Countrenderer(){
  const count = useContext(CountContext);
  return(
    <>
    {count.c}
    </>
  )
}

function Button(){
  const count = useContext(CountContext);
  
  return(
    <>
      <button onClick={()=>{
        count.setC(count.c+1)
      }}>Increase</button>

      <button onClick={()=>{
        count.setC(count.c-1)
      }}>Decrease</button>
    </>
  )
}


function Routings() {
  return (
    <>

    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/dashboard" element={
          <Suspense fallback={"..."}>         {/*Suspense is used for lazy loadind */}
        <Dashboard/>
          </Suspense>}/>
        <Route path="/" element={<Suspense fallback={"..."}>
          <Landing/>
        </Suspense>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

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

export default App
