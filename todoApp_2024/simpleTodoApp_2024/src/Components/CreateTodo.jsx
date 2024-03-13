import { useContext, useEffect,useState } from "react"
import axios from "axios";
import TodoContext from "../Contexts/TodoContext";
export function CreateTodo(){
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();
    const {todos,setTodo}  = useContext(TodoContext);
    async function createTod(){
        await axios.post("http://localhost:3000/todos",{
            "title":title,
            "desc":desc
        })
        setTodo([...todos,{
            "title":title,
            "desc":desc
        }])
    }
    return(
        <div>
            <input type="text" name="" id="" placeholder="title" value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input type="text" name="" id="" placeholder="Description" value={desc}
                onChange={(e)=>setDesc(e.target.value)}
            />
            <button type="submit" onClick={createTod}>Create</button>
        </div>
    )
}