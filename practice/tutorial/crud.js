
// c= create
// r= read
// u=update
// d=delete

const fs = require('fs');


//create new file and write data in file
fs.writeFileSync("read.txt" ," babita,this is file txt file data" );

//without buffer data = read file
const data=fs.readFileSync('read.txt','utf8');//encoding
console.log(data);


//rename the file = update
fs.renameSync('read.txt', 'readwrite.txt');

//delete = file
fs.unlinkSync('bio.txt');
// delete folder
fs.rmdirSync('thapa');
