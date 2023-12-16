// var prompt = require("prompt");
var i = 10;
function dummFunc() {
    
    callMe();
}
function callMe() {
    const myIn = setTimeout(() => {
        console.log(i);
        i--;
        dummFunc();
    }, 1000);
    if(i<0)
        clearTimeout(myIn);

}
dummFunc();