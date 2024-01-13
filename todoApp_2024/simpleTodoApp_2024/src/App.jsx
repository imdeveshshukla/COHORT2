import { useState } from 'react';
// import './App.css'
import { CreateTodo } from './Components/CreateTodo';
import { Todos } from './Components/Todos';


//useEffect Hook
async function App() {
  const [todos, setCount] = useState([]);

  const ansRet = await fetch("http://localhost:3000/todos");
  setCount(ansRet.todos[0]);


  return ( 
    <>
    <h1>This is my Apps</h1>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
   );
}

export default App
