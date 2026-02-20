import express from 'express'
const app = express();
const port = 8080;
app.listen(port,() => {
    console.log("Server Started Successfully!");
})

const loggar = (req,res) => {
    req.message = "This is loggor function";
    next();
}

app.get(){
    
}