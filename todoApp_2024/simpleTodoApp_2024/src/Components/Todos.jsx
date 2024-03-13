import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Todos.css';
import TodoContext from '../Contexts/TodoContext';
export function Todos(){
    
    
    const { todos } = useContext(TodoContext);
    // console.log(todos);  //Trial

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