const http =require('http');
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    res.statusCode=200;
    res.setHeader("Content-Type" , "text/html");
    res.write("<h1>hello world</h1>");
    res.end(`<html>
<body>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<h1>this is a heading</h1>
</body>
</html>`);
});
PORT=3000;

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})