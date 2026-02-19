import express from 'express'
const app = express()
const port = 8081;
app.listen(8081,() => {
    console.log(`server started successfully on http://localhost:${port}`);
})
app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("Response from Server from /")
});