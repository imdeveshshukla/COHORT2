console.clear()
let i =10;
const myIn = setInterval(() => {
    console.log(i);
    i--;
    
    setTimeout(() => {
        console.clear();
    }, 1000);
    if(i<0)
        clearInterval(myIn);
}, 1000);