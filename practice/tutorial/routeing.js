
// const url= require("url");

// const http = require("http");

// const server = http.createServer((req, res)=>{
//     if(req.url=="/"){
//         res.end("hello from the home")
//     }else if(req.url=="/about" ){
//         res.end("hello from the about") 
//     }
// else if(req.url=="/contact" ){
//     res.end("hello from the contact") 
// }
// else{
//     res.writeHead(404 ,{"content-type":"text/html"});//html type
//     res.end("<h1>404 errer pages.</h1>")
// }

// })

// server.listen(8000, "127.0.0.1" , ()=>{
//     console.log("listening to the port no 8000")
// });

//sync se api bar bar call hogi
const data =  fs.readFileSync("userApi.json", "utf-8");
    const objData = JSON.parse(data);


const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    if(req.url=="/"){
        res.end("hello from the home")
    }else if(req.url=="/about" ){
        res.writeHead({"content-type": "application/json"});
         res.end(objData[3].body);
    }
else if(req.url=="/contact" ){
    res.end("hello from the contact") 
}
else{
    res.writeHead(404 ,{"content-type":"text/html"});//html type
    res.end("<h1>404 errer pages.</h1>")
}

})

server.listen(8000, "127.0.0.1" , ()=>{
    console.log("listening to the port no 8000")
});