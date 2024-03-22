import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Todos.css';
import TodoContext from '../Contexts/TodoContext';
export function Todos(){
    
    
    const { todos } = useContext(TodoContext);

    function deleteTodo(id) {
        console.log(id);
    }
    return(
        <div className='todoList'>
            {todos.map(function(todo){
                {/* console.log(todo) */}
                return (
                <div>
                    <h1>{todo.title}</h1>
                    <h3>{todo.desc}</h3>
                    <button>{(todo.completed)==true?"Completed":"Not Completed"}</button>
                    <button onClick={()=>deleteTodo(todo._id)}>{"Delete"}</button>
                </div>
                );
            })}
        </div>
    );
}