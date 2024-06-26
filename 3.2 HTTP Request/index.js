import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res) =>{
    res.send("<h1>Hello !dfdfd</h1>");
});
app.get("/aboutme",(req,res) =>{
    res.send("<h1>about  me</h1>");
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});