
import { CreateTodo } from './Components/CreateTodo';
import { Todos } from './Components/Todos';
import TodoApp from './Contexts/TodoContexProvider';

//useEffect Hook
function App() {
  return ( 
    <>
    <h1>This is my Todo App</h1>
    <TodoApp>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </TodoApp>
    </>
   );
}

export default App
