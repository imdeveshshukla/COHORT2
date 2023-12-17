const express = require("express");
const app = express();

function findFibonacci(n) {
    if(n==1)
        return 0;
    if(n==2)
        return 1;
    else
        return findFibonacci(n-1)+findFibonacci(n-2);
}
app.get("/",(req,res)=>{
    res.send("Hi From Devesh' PC");
});

app.get("/findFibonacci",(req,res)=>{
    const inp = req.query.n;
    const ans = findFibonacci(inp);
    res.send("<h1>Ans = "+ans+"</h1>");
});

app.listen(3000,()=>{console.log("Port is ",3000);});