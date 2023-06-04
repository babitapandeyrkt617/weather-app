
//file system
const fs = require('fs');

//create new file and write data in file
fs.writeFileSync("read.txt" ," babita,this is file txt file data" );

// agr hme text file me or bhi kuch add krna ho ta = append
fs.appendFileSync('read.txt','hlo how areyou i am fine');

//read.txt file ke under kya data likka tha use read krna ho ta
const buf_data=fs.readFileSync('read.txt');
org_data=buf_data.toString();
console.log(org_data);

//rename the file
fs.renameSync('read.txt', 'readwrite.txt');

// fs.writeFileSync('crud.js' , ' babita this is crud file');
fs.mkdirSync('thapa');



