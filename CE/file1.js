const fs = require('fs'); //fs=file system
const data=fs.readFileSync("./data.txt","utf-8");
console.log(data.toString());
