import express from 'express'
const app = express()
const port  = 8080
app.listen(port,()=>{
    console.log("server started")
});
app.get("/:id",(req,res)=>{
    console.log(req.url);
    console.log(req.params);
    console.log(req.params.id);
});
app.get("/:id/:email",(req,res)=>{
    console.log(req.url);
    console.log(req.params);
    res.send(req.params.id+req.params.email);
});
app.get("/id/:id/email/:email",(req,res)=>{
    console.log(req.url);
    console.log(req.params);
    res.send(req.params.id+req.params.email);
});

app.get("/home",(req,res)=>{
    res.send("Hello world");
});

