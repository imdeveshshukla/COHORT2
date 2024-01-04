import './App.css'
import { CreateTodo } from './Components/CreateTodo';
import { Todos } from './Components/Todos';


//useEffect Hook
function App() {
  const [todos, setCount] = useState([]);

  fetch("")


  return ( 
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
   );
}

export default App
