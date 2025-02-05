const fs = require('fs'); //fs=file system

const data=fs.readFileSync("./data.txt","utf-8");
//or
//const data=fs.readFileSync("./data.txt",{encoding:"utf-8"});
// console.log(data.toString());

fs.writeFileSync("./data1.txt","so,this is my data and where is your data");

fs.appendFileSync("./data1.txt","here i am ");
fs.renameSync("./data1.txt","./data2.txt")

//to delete the file
fs.unlinkSync("./data2.txt");

if(data.match("h")){
    console.log("h is present");
    const changeData= data.replace("h","hhhhhhhhhhh");
    fs.writeFileSync("./data.txt",changeData);
}

