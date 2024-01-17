function Todos({myTodo}){
    return(
        <>
            <h3>Title : {myTodo.title}</h3>
            <p>{myTodo.desc}</p>
            <p>Completed : {myTodo.completed==true?"Yes":"No"}</p>
        </>
    )
}

export default Todos;