import express from 'express';
import fs from "fs";

const app = express();
const port = 3000;
let image:Buffer

app.get("/",(req,res)=>{
    var img = fs.readFile("./images/fjord.jpg",(err,data)=>{
        if(err) throw err;
        image = data
        res.send("<img src='./images/fjord.jpg'/>")
    })
    //res.send(data);
    console.log("weeee");
})

app.listen(port,()=>{
    console.log("listen to port: http://localhost:"+3000)
})
