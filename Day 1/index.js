const fs = require('fs');

//-----------------------Example of Async Code
fs.readFile('a.txt',"utf-8",function(err, data) {
    console.log(data);
})
//-----------------------


console.log("Hello");
let sum  = 0;

//-----------------------Example of Synchronous Code
// for(let i = 0;i<100000000;i++) //takes to to to much time
// {
//     sum = sum + i;
// }
// console.log(sum);
//-----------------------
function myfunc(a){
    console.log("This is my function"+a);
}
function myLand(functiontoCall){
    console.log("This is my Land");
    functiontoCall(5);
}
myLand(myfunc);
