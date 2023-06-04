const http = require("http");
const fs = require("fs");
var requests = require("requests");
 const homeFile = fs.readFileSync("home.html", "utf-8"); // front end data to backend
 const repalceVal = (tempVal , orgVal)=>{
   temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
 temperature = temperature.replace(" {%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace(" {%tempmax%}", orgVal.main.temp_max);
 temperature = temperature.replace("{%city%}", orgVal.name);
 temperature = temperature.replace("{%country%}", orgVal.sys.country);
 temperature = temperature.replace(" {%tempStatus%}", orgVal. weather[0].main);

  return temperature;

 }


//create server

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        //user request krega fir api ke under jaega and fir uska
         //data chunk  me milega step by step
        
        requests(
    
          "http://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=cffecceafab4795d98bde4086c0332bb"
        )
       
      
          //jab data read krna ho
          .on("data", (chunk)=>{
            console.log(chunk)
            const objData = JSON.parse(chunk); //json to  object
            const arrData= [objData]; //object to arr convert
            //arry me fir obj me fir main me fir temp ko call krna h
            // console.log(arrData[0].main.temp); // arr of an object  //get tem value
            const realTimeData = arrData.map(val=> repalceVal(homeFile ,val)).join("");
           res.write(realTimeData);
          // console.log(realTimeData);
          })
          .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);
            res.end();
          });
      } else {
        res.end("File not found");
      }
    });
    
    server.listen(8000, "127.0.0.1",()=>{
      console.log("listening to the port no 8000");
    });