
const fs = require("fs");
const http= require("http");
const server = http.createServer();
server.on('request',(req , res)=>{
// fs.readFile("input.txt",(err , data)=>{
//     if(err) return console.log(err)
//     res.end(data.toString());
// })

//2nd way
// const rstream = fs.createReadStream('input.txt');
//data read than call data
// rstream.data('data',(chunkdata)=>{
// res.write(chunkdata);
// })
// rstream.pending('end', ()=>{
//     res.end();
// })


//pipe streams 3re
const rstream = fs.createReadStream('input.txt');
rstream.pipe(res);

})
server.listen(8000, "127.0.0.1" , ()=>{
    console.log("listening to the port no 8000")
});