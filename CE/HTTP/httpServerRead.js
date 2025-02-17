const http =require('http');
const fs=require("fs/promises");
const server = http.createServer(async(req,res)=>{
    // console.log(req.url);
    res.statusCode=200;
    res.setHeader("Content-Type" , "text/html");
    res.write("<h1>hello world</h1>");
    const data = await fs.readFile("./home.html","utf-8");
    res.end(data);
});
PORT=8000;

server.listen(PORT,()=>{
    const a= server.address();
    console.log(`server is running on port ${PORT}`);
})

// random range of port 49000 to 65000