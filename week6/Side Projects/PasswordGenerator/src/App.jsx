import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import generatePassword from './GeneratePass';
function App() {
  const [pass,setPass] = useState("");
  const [len, setLen] = useState(10)
  const [isNumberAllow,setNum] = useState(false);
  const [isSpecialCharAllow,setChar] = useState(false);

  const passRef = useRef(null)

  const genPass = useCallback(()=> generatePassword(len,isSpecialCharAllow,isNumberAllow),[len,isNumberAllow,isSpecialCharAllow]);
  console.log("Rerendering......."+pass);
  useEffect(()=>{
    setPass(genPass);
  },[len,isNumberAllow,isSpecialCharAllow])
  return (
    <div className='w-full h-screen bg-black'>
      <div className='Main flex-col mx-auto p-5 w-1/2 h-48 border-2 rounded-xl border-white text-orange-500'>
        <p className='max-w-fit mx-auto'>Password Generator</p>
        <div className='passBox text-black max-w-fit mx-auto'>
          <input className="bg-white w-3/4 my-2 p-1 outline-none rounded-s-lg" ref={passRef} type="text" name="pass" id="" value={pass} readOnly/>
          <button className='bg-blue-500 w-10 p-1 outline-none rounded-e-lg' onClick={()=>{
            navigator.clipboard.writeText(pass);
            passRef.current.select()
          }}>copy</button>
        </div>
        <div className='btns flex gap-2 flex-wrap max-w-fit mx-auto'>
          <input type="range" name="passSize" id="" value={len} min={6} max={50}
            onChange={(e)=>setLen(e.target.value)}
          /><p>PassLen:{len}</p>
          <label htmlFor="InputNumber">Numbers: </label>  <input type="checkbox" name="forNums" id="" 
            value={isNumberAllow}
            onChange={(e)=>{
              setNum(e.target.checked)
              console.log(isNumberAllow);
            }}
          />
          <label htmlFor="InputCharacter">Charaters: </label>  <input type="checkbox" name="forChars" id="" 
            value={isSpecialCharAllow}
            onChange={(e)=>{
              setChar(e.target.checked)
            }}
          />
      </div>
        
      </div>
    </div>
  )
}
export default App
