import express from 'express'
const app = express();
const port = 8080;
app.listen(port,()=>{
    console.log("Server Started successfully on http://localhost:8080");
});
app.use(express.json())

let users = [
    {id:1,name:"vishnu",email:"vishnu@gmail.com",role : "ML"},
    {id:2,name:"Ajay Kumar",email:"ajay@gmail.com",role:"SDE"},
    {id:3,name :"DODDi SURESH",email:"doddi@gmail.com",role : "Bathroom Cleaner"}
]
