import { useParams } from "react-router-dom";
import { useRecoilState,RecoilRoot } from "recoil";
import { todosAtomFamily } from "../atoms";

export function Intro(){
    const { id } = useParams();
    return <>
       <RecoilRoot>
        <Todo id={id}/>
    </RecoilRoot>
    </>
}
function Todo({id}) {
    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
 
   return (
     <>
       {todo.title}
       <br/>
       {todo.description}
       <br />
       <hr />
     </>
   )
 }