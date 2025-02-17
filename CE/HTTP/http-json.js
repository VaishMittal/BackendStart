const http = require("http");

const fs = require('fs/promises');
const server = http.createServer(async (req,res)=>{
    res.writeHead(200,{'Cotent-Type':'application/json'});
    // const newdata = users.map((user)=>{
    //     return user.name
    // });
    const filedata =await fs.readFile("./aa.json",'utf8');    //filedata is of  string type
    // let newdata = "";                      // string to object JSON.parse
    // users.forEach((user)=>{               //for each do not return anything                    
    //     newdata += `${user.name}`;
    // });
    // res.end(JSON.stringify(newdata))   //for Array
    const parsedata = JSON.parse(filedata);
    res.end(JSON.stringify(parsedata));     //for string

})
PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})