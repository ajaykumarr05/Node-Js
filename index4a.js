import express from 'express'
const app = express()
const port = 8080
app.listen(port,()=>{
    console.log("server started succesfuly!");
});
app.get("/x/:a/y/:b/z/:c",(req,res)=>{
    const n1 = Number(req.params.a);
    const n2 = Number(req.params.b);
    const n3 = Number(req.params.c);
    const sum = n1+n2+n3;
    console.log(req.url);
    console.log(req.params);
    res.send("sum :"+sum);
});

app.get("/:a/:b/:c/:d",(req,res)=>{
    res.send("Hello Students!");
});

