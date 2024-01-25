import { useEffect, useRef, useState } from 'react'
import 'cors';



function App() {

  const divRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
    setTimeout(() => {
      divRef.current.innerHTML = 10
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return(
    <div>
      hi there , your income tax return is <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App
