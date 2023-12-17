/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("P1 Cleared");
        },t*1000);
    });
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("P2 Cleared");
        },t*1000);
    });
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("P3 Cleared");
        },t*1000);
    });
}

async function calculateTime(t1, t2, t3) {
    var d1 = Date.now();
    var d2;
    // wait1(t1).then(()=>{
    //     wait2(t2).then(()=>{
    //         wait3(t3).then(()=>{
    //             d2 = Date.now();
    //         });
    //     })
    // })
    const p1 = await wait1(t1);
    const p2 = await wait2(t2);
    const p3 = await wait3(t3);
    d2 = Date.now();
    return (d2-d1);
}

module.exports = calculateTime;
