import express from 'express'
const app = express()
const port = 8080
app.listen(port,()=>{
    console.log(`server started successfully on http:localhost:${port}`);
});
app.get('/about',(req,res)=>{
    console.log(req.url);
    res.send("This is about page");
})
app.get('/home',(req,res)=>{
    console.log(req.url);
    res.send("this is home page");
});
app.get('/home/body',(req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    console.log(req.header);
    console.log(req.headers.authorization);
    res.send("this is home page body sections");
});
