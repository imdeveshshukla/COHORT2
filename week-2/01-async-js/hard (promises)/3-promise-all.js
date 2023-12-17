/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// async function wait1(t) {
//     await setTimeout(()=>{
        
//     },t*1000)
// }

// async function wait2(t) {
//     await setTimeout(()=>{
            
//         },t*1000);
// }

// async function wait3(t) {
//     await setTimeout(()=>{

//     },t*1000);
// }

function calculateTime(t1, t2, t3) {
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },t1*1000);
    });
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },t2*1000);
    });
    const p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },t3*1000);
    });
    return Promise.all([p1,p2,p3]).then(()=>{
        return (Math.max(t1,t2,t3)*1000);
    });
}

module.exports = calculateTime;
