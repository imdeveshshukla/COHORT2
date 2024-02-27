import { useEffect,useState } from "react"
import axios from "axios";
export function CreateTodo(){
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();
    async function createTod(){
        await axios.post("http://localhost:3000/todos",{
            "title":title,
            "desc":desc
        })
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