const fs = require("fs");
// object
// const Biodata={
//     name:"babita",
//     age:21
// }
// console.log(Biodata.name);

// object to json
// const jsonData = JSON.stringify(Biodata)
// console.log(jsonData);
// not access
// console.log(jsonData.name);


// json to object
// const objData = JSON.parse(jsonData)
// console.log(objData);
// access
// console.log(objData.age);








// convert tojson
// dusre file me add krna 
// readfile
// again convert back to js abj 
// console.log

const Biodata={
    name:"babita",
    age:21
}
console.log(Biodata.name);
const jsonData= JSON.stringify(Biodata);  //1
fs.writeFile("json1.json",jsonData,(err)=>{  //2
console.log("done");
})

fs.readFile("json1.json" , "utf-8",(err , data)=>{
    const objData= JSON.parse(data)   //3
console.log(objData);      //4
console.log(data);
})
  
