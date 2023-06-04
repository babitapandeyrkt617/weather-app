const path = require("path");

//kon si directory me h
console.log(path.dirname("C:/Users/Anurag Pandey/Desktop/nodejs/practice/path.js"));

//extenstion name
console.log(path.extname("C:/Users/Anurag Pandey/Desktop/nodejs/practice/path.js"));

//file ka name pta krne ke liye
console.log(path.basename("C:/Users/Anurag Pandey/Desktop/nodejs/practice/path.js"));

//sbko ek sath excute krne ke liye  like = directory , root , basename,extension, name
console.log(path.parse("C:/Users/Anurag Pandey/Desktop/nodejs/practice/path.js"));

//  object call
const myPath= path.parse("C:/Users/Anurag Pandey/Desktop/nodejs/practice/path.js");
console.log(myPath.name);
console.log(myPath.root);
console.log(myPath.base);
console.log(myPath.ext);