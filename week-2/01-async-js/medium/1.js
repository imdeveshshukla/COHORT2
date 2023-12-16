const fs = require("fs");
var str;
fs.readFile("a2.txt",function(err,data) {
    str = data.toString();
    str = str.replaceAll("   ","");
    console.log(str);
    fs.writeFile("a2.txt",str,(err)=>{console.log(err);});
        // console.log(data.toString());
})
// str = str.trim();