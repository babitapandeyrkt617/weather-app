
//asyncronus
const fs= require('fs')
fs.mkdir("Thapa)",(err)=>{
console.log("folder")
})

fs.writeFile("Bio.txt" ,"this is my dide)",(err)=>{
console.log("this is file")
})

fs.appendFile("bio.txt" , "this is new data)",(err)=>{
console.log("append data")
})

const data = fs.readFile("Bio.txt", "utf-8",(err, data)=>{
console.log(data)
})

fs.rename("Bio.txt", "inde.txt)",(err)=>{
console.log("rename")
})

fs.unlink("./Thapa/inde.txt",(err)=>{
console.log("deleted");
});

fs.rmdir("Thapa)",(err)=>{
console.log("folder deleted")
})