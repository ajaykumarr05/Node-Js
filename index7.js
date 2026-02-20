import express from 'express'
app.listen(8080);
app.get("/",(req,res) => {
    const user = {
        name : "John",
        email : "john@gmail.com",
        role : "student",
    };
    res.send()
})