
import { CreateTodo } from './Components/CreateTodo';
import { Todos } from './Components/Todos';


//useEffect Hook
function App() {
  
  
  // const ansRet = await fetch("http://localhost:3000/todos");
  // setCount(ansRet.todos[0]);


  return ( 
    <>
    <h1>This is my Todo App</h1>
    <CreateTodo></CreateTodo>
    <Todos></Todos>
      {/* <CreateTodo></CreateTodo> */}
      {/* <Todos todos={todos}></Todos> */}
    </>
   );
}

export default App
