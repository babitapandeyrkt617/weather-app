
//file system useing asyncronus
const fs= require('fs');

//create file with callback
// fs.writeFile("read.txt","today is niceday:)",(err)=>{
//     console.log("file is created");
//     console.log(err);
// });


//data add krne ke liye
// fs.appendFile("read.txt","this is my name)",(err)=>{
//  console.log("data succefully added");
// });

//read data
 const data= fs.readFile("read.txt","UTF-8",(err ,data)=>{
 console.log(data);
 });