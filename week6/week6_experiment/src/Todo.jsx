const { useState } = require("react");

function Todo({title,desc}){
    const [todos,setTodos] = useState([{
        id:1,
        title:"Go to Gym",
        desc:"Everydat"
    },
    {
        id:2,
        title:"Go to School",
        desc:"Everydat"
    },{
        id:3,
        title:"Go to Home",
        desc:"Everyday"
    }
    ]);

    
    function addTodo(){
        setTodos([...todos,{
            id:4,
            title:"Go to class",
            desc:"Got it"
        }
        ])
    }

    todos.map(function(todo){
        return (<>
            <h1>title : {todo.title}</h1>
            <h3>Desc : {todo.desc}</h3>
        </>)
    });
};