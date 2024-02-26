import { useEffect, useState } from 'react';
import axios from 'axios';
export function Todos(){


    const [todos, setTodo] = useState([
     {
        id : 1,
        title:"Gym",
        desc:"Workout at 7am",
        completed: false
      },
      {
        id : 2,
        title:"Food",
        desc:"Food at 8am",
        completed:true
      },
      {
        id : 3,
        title:"Online Class",
        desc:"class  at 11am",
        completed:false
  
    }]);
  
    useEffect(()=>{
        async function fetchData(){
            const data = await axios.get("http://localhost:3000/todos");
            setTodo(data.data);
        }
        fetchData();
    },[])

    function addTodo(){
        console.log("cliekc");
      setTodo([...todos,{
        id: 4,
        title:"Fuck Harshit",
        desc:"Ahaa.aha",
        completed:false
      }]);
    }

    return(
        <>
            {todos.map(function(todo){
                return (
                <div>
                    <h1>{todo.title}</h1>
                    <h3>{todo.desc}</h3>
                    <button>{(todo.completed)==true?"Not Completed":"Completed"}</button>
                </div>
                );
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
}