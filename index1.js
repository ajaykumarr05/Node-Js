import express from 'express';
const app = express();
const port = 8081;
app.listen(port,() => {
    console.log("server Started successfully on the http://localhost:8080/");
});
//app.listen(8080)

app.get('/',(req,res)=>{
    res.send("Hello World!");
});

// To start the server
