import express from 'express';

const app = express();  //work as http.create server

app.get('/api',(req,res)=>{
    try{
    // const data = req.query;

    //in a destructure manner
    const {name="guest",rollno=100} = req.query;
    // console.log(data)

    //  http://localhost:3000/api?name=vaishnavi&rollno=62   in browser
    //what we write after ? that is query string

    if(!name){
        res.send({
            status:404,message:"name is required"
        });
      //  res.status(404).send("name is not defined")
    }
    else{
    res.send(`hello dear ${name} and my roll no. is ${rollno}`);}}
    catch(err){
        console.log(err.message)
    }
}); //get api

//http://localhost:3000/api/vaish/20  this is in browser
app.get('/api/:name/:age',(req,res)=>{
    try{
    const data = req.params;
    res.send(`hello dear ce students ${data.name} and your age is ${data.age}`)}
    catch(err){
        console.log(err.message);
    }
})

const port=3000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});

//axios is alternative of fetch

//get to retrieve and can be used as delete also  in header (url)
//post for creation of new user  //we use body in this and all below it
//put to replace an existing user 
//patch for specific changes like renamee
//delete 