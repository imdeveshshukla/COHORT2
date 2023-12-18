const express = require("express");
const app = express();

app.use(express.json());

const users = [
    {name:"John",
        kidneys:[{
            kidneyNum : 2,
            isHealthy : true
        }]},
        {
            name:"devesh",
            kidneys:[{
                kidneyNum :1,
                isHealthy :true
            }]
        },{
            name:"ravi",
            kidneys:[{
                kidneyNum:0,
                isHealthy:false
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
app.post("/",function(req,res) {
    // console.log(req.body);
    const user = req.body.user;
    const kidneyHelth = req.body.isHealthy;
    console.log(kidneyHelth);
    for(let i =0;i<users.length;i++)
    {
        if(users[i].name == user)
        {
            users[i].kidneys[0].kidneyNum++;
            users[i].kidneys[0].isHealthy = kidneyHelth;
            res.json(users);
            break;
        }
    }
});

app.put("/",(req,res)=>{
    users.forEach(element => {
        element.kidneys[0].isHealthy = true;
    });
    res.json("Every Kidney Become Healthy");
});

app.delete("/",(req,res)=>{
    const user = req.headers.user;
    for(let i=0;i<users.length;i++)
    {
        if(users[i].name == user){
            users[i].kidneys[0].kidneyNum--;
            res.json(users[i]);
            break;
        }
    }
});
app.listen(3000,()=>{console.log("Port Started");});
