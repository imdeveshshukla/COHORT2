const express = require("express");
const app = express();

const users = [
    {name:"John",
        kidneys:[{
            kidney1health : true,
            kidney2health : false
        }]},
        {
            name:"devesh",
            kidneys:[{
                kidney1health:true,
                kidney2health:true
            }]
        },{
            name:"ravi",
            kidneys:[{
                kidney1health:true
            }]
        }
    ]

app.get("/",(req,res)=>{
    const user = req.query.user;
    const userData = users.filter((n)=>{
       return n.name == user;
    })
    res.json(userData[0].kidneys[0]);
});

app.listen(3000,()=>{console.log("Port Started");});
