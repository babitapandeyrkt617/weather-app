const express = require("express");
const app= express();

app.get("/", (req,res)=>{
res.send("i am a server")
})
const start = async ()=>{
    try{
        app.listen(5000 ,()=>{
            console.log("server start")
        })
    }
    catch(err){
        console.log(err)
    }
}
start();