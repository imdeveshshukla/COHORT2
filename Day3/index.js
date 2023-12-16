//How to create and expose http server 
const bp = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;

app.use(bp.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("This is post req");
});

app.listen(port,()=>{
    console.log("Http server start on ",port);
});