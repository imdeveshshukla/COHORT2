import { useEffect, useState } from 'react'
import 'cors';



function App() {
  const [count, setCount] = useState([])
  useEffect(()=>{

    fetch("https://sum-server.100xdevs.com/todo?id=1")
    .then(async function (res){
        console.log(res);
        const data = await res.data.todo;
        setCount(data);
        console.log(data);
    });
  },[])
  return (
    <>
      <h1>{count.title}</h1>
    </>
      
  )
}

export default App
