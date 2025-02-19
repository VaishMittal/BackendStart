const http = require('http');
const axios = require('axios');
const PORT = 3000;

const server = http.createServer(async (req, res) => {  
    console.log('New request received');
    res.writeHead(200, { "Content-Type": "text/html" });

    // const response =await fetch("https://dummyjson.com/products");
    // const data =await response.json();

    const response = await axios.get("https://api.github.com/search/users",
        {
            params:{q:"location:ghaziabad"}
        }
    );

    const gituserdata =response.data.items;

    let frontdata = `<html><head></head><body>`
    gituserdata.forEach((user)=>{
        frontdata+=(`<div><img src="${user.avatar_url}"></div>`)
    })
    frontdata += `</body></html>`
    
    res.end(frontdata);

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
