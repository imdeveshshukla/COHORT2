/* eslint-disable react/prop-types */
import React ,{ useState } from "react";
import Todos from "./Todos";

function App(){
  
  const [todos,update] = useState([
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
    }
  ])

  function addTodo(){
    update(...todos,{
      id: 4,
      title:"Fuck Harshit",
      desc:"Ahaa.aha",
      completed:false
    });
  }

  return(
    <>
      <h1>Hello</h1>
      <Header title="devesh2"></Header>
      
      {todos.map((todo)=>{
        return (
          <Todos myTodo={todo} key={todo.id}></Todos>
        )
      })}     
      <button onClick={addTodo}>Fuck</button>  
    </>/* here we sending same parameters so memo does not rerendering*/
  )
}






const Header = React.memo(function He({title}){    //we can also write (props) and then props.title
  return(
    <>
      My nam is {title}
    </>
  )
})  //when we pass same parameters and learn about it 

export default App;