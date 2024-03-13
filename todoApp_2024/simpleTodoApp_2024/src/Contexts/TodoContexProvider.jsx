import { useState,useEffect } from "react";
import TodoContext from "./TodoContext";
import axios from "axios";
export default function TodoApp({children}){
    const [todos, setTodo] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const data = await axios.get("http://localhost:3000/todos");
            setTodo(data.data);
        }
        fetchData();
        
    },[])
    return (
        <TodoContext.Provider value={{todos,setTodo}}>
        {children}
        </TodoContext.Provider>
    )
}