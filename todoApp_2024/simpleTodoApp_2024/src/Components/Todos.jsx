import { useEffect, useState } from 'react';
import axios from 'axios';
import './Todos.css';
export function Todos(){
    const [todos, setTodo] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const data = await axios.get("http://localhost:3000/todos");
            setTodo(data.data);
        }
        fetchData();
    },[todos])

    return(
        <div className='todoList'>
            {todos.map(function(todo){
                return (
                <div>
                    <h1>{todo.title}</h1>
                    <h3>{todo.desc}</h3>
                    <button>{(todo.completed)==true?"Not Completed":"Completed"}</button>
                </div>
                );
            })}
        </div>
    );
}