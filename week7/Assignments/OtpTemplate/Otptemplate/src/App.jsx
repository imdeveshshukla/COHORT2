import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const 
  if(count==0)
  {
    return (
      <div className='flex flex-col m-auto justify-evenly justify-items-center w-96 h-64 border-2 bg-black border-stone-950'>
        <h3 className='text-slate-200 text-center'>Login Via OTP</h3>
        <input type="number" name=""  id="" className='block w-2/4 mx-auto' placeholder={"Enter Mobile Number"}/>
        <button className='w-24 text-white border border-white mx-auto hover:bg-slate-200' onClick={()=>setCount(1)}>Send OTP</button>
      </div>
    )
  }
  else{
    return(
    <div className='flex flex-col m-auto justify-evenly justify-items-center w-96 h-64 border-2 bg-black border-stone-950'>
        <h3 className='text-slate-200 text-center'>Login Via OTP</h3>
        <div className='OtpInp bg-black mx-auto flex gap-2'> 
        <input className='w-10' ref={b1} type="number" name="" size={1} id="" />
        <input className='w-10' ref={b2} type="number" name="" size={1} id="" />
        <input className='w-10' ref={b3} type="number" name="" size={1} id="" />
        <input className='w-10' ref={b4} type="number" name="" size={1} id="" />
        </div>
        <button className='w-24 text-white border border-white mx-auto hover:bg-slate-200' onClick={""}>Enter OTP</button>
        <button className='w-24 text-white border border-white mx-auto hover:bg-slate-200' onClick={()=>setCount(0)}>ReEnter MobNo</button>
      </div>
    )
  }
}

export default App
