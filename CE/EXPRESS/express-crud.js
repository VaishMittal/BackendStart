import express from 'express'

const users=[{
    id:1,
    name:'vaishnavi',
    age:21
}]

const app = express();  //call func
const port = 3000;
app.get('/',(req,res)=>{
    res.send(users)  //data conversion implicitly into string from any type of data like users is object type
})

app.use(express.json()); // this is an inbuilt middleware but app.use is just a function work as loader


app.post("/api/createUser",(req,res)=>{
    const {name,age}=req.body;

    const newid = users.length>0? users[users.length-1].id+1 :1;

    users.push({id:newid,name,age});
    res.send("new user is created successfully");
})


//this is to find any user based on the id
app.get("/api/user/:id",(req,res)=>{
    const {id} =req.params;
    const user = users.find(user=>user.id == id);
    res.send(user);
})

app.patch("/api/updateUser/:id",(req,res)=>{
    const {id} =req.params;
    const {name} = req.body;

    const index = users.findIndex(user=>user.id == id);
    users[index].name=name;
    res.send("user is updated successfully");
})

app.delete("/api/deleteUser/:id",(req,res)=>{
    const {id} =req.params;

    const index = users.findIndex(user=>user.id == id);
    users.splice(index,1);
    res.send("user is deleted successfully");
})

app.listen(port,()=>{
    console.log(`server is listening on  ${port}`);
});
