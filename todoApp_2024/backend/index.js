const express = require("express");
const { createTodo,updateTodo } = require("./types");
const todo = require("./db");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());

app.get("/todos",async function(req,res) {
    const todos = await todo.find({});

    res.json(
        todos
    )
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
        desc:createPayLoad.desc,
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

    try{

        await todo.updateOne({
            _id : updatePayLoad.id
        },{
            completed:false
        })
    }
    catch(err){
        res.status(411).json({
            msg: "Something Went Wrong",
        })
        console.log(err);
        return;
    }

    res.json({
        msg : "Todo Updated"
    })
});


app.get("/",(req,res)=>{
    res.json({
        "Server": "Healthy"
    });
});

app.listen(3000,()=>{console.log("Port Started on 3000");});