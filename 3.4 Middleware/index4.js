import express from "express";
import sanjay from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); 

const app = express();
const port = 3000;
var name='';

app.use(sanjay.urlencoded({extended: true}));


app.use(logger)


app.get("/", (req, res) => {
  //Do something with the data
  console.log("home")
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/submit", (req, res) => {
  //Do something with the data
  console.log("submit")
  res.send(`<h1>YOUR BAND NAME IS </h1> <h3>${name}</h3>`);
});

function logger(req,res,next){
  
  console.log('log');
  console.log(req.body);
  name= req.body["street"] + req.body["pet"];
  next();

}



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
