import { useEffect, useState } from 'react'
import React from 'react';
import './App.css'
//create hooks for current width height of windows

const [loader,setLoad] = useState(true);
// const [online,setOne]

function useOnline(){
  const [isOnline,setOnlin] = useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener("online",()=>{
      setOnlin(true);
    })
    window.addEventListener("offline",()=>{
      setOnlin(false);
    })
  },[])
}

function useTimer(n){       //every n second hit backend
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const val = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoad(false);
        })
      
    }, n*1000);


    return()=>{
      clearInterval(val);
    }
  }, [n])


  return todos;
}
function useTodo(){       //this custome hooks which is data fetching
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoad(false);
      })
  }, [])


  return todos;
}

function App() {
  const todo = useTimer(5);

  if(loader)
    return (<>"Loading..."</>)

  return(<>
    {todos.map(todo => <Track todo={todo} />)}
  </>
  )

}
function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}
export default App
