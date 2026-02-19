import express from 'express'
const app = express()
const port = 8080
app.listen(port,()=>{
    console.log(`server started successfully on http:localhost:${port}`);
});
app.get('/home',(req,res)=>{
    console.log(req.url);
    res.send("this is home page");
});
