import React , { useState,lazy,Suspense } from 'react'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import './App.css';

const Dashboard = lazy(()=>import('./Pages/Dashboard'));
const Landing = lazy(()=>import('./Pages/Landing'));
// import Landing  from './Pages/Landing'




function App() {
  const [count, setCoun] = useState(0)

  //Suspense APi
  console.log("rerenders");
  return(
    <>
      <Count count ={count} setCoun={setCoun}/>
      {/* hi */}
    </>
  )
  
}

function Count({count, setCoun}){
  return (
    <div>
      <Countrenderer count={count}></Countrenderer>
      <Button count={count} setCount={setCoun}></Button>
    </div>
  )
}


function Countrenderer({count}){
  return(
    <>
    {count}
    </>
  )
}

function Button({count,setCount}){
  return(
    <>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increase</button>

      <button onClick={()=>{
        setCount(count-1)
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
