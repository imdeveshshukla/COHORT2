const express = require("express");
const { createTodo,updateTodo } = require("./types");
const todo = require("./db");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());

app.get("/todos",async function(req,res) {
    const todos = await todo.find({});

    res.json({
        todos
    })
});



app.post("/todos",async function(req,res){
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You send the wrong input",
        })
        return;
    }
    //put it on mongodb
    
    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    })
    
    res.json({
        msg:"Todo Created"
    })
});

app.put("/completed",async function(req,res){
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You send the wrong input",
        })
        return;
    }

    await todo.update({
        _id : req.body.id
    },{
        completed:true
    })

    res.json({
        msg : "Todo Updated"
    })
});


app.get("/",(req,res)=>{
    res.send("Hi");
});

app.listen(3000,()=>{console.log("Port Started on 3000");});