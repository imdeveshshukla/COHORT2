const fs = require('node:fs');
const data = 'Hello Node.js';
fs.writeFile('a.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 

fs.readFile("a.txt",encodeURI,(err, items)=>{
    console.log(items.toString());
})


// console.log(fs);