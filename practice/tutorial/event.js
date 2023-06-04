//event module
//how to use events 
const EventEmitter = require("events"); //class
//class using object
const event = new EventEmitter();
event.on("saymyname",()=>{
    console.log("your name is babita")
});

event.on("saymyname",()=>{
    console.log("your name is anshu")
});

event.on("saymyname",()=>{
    console.log("your name is annu")
});
event.emit('saymyname');    // own event

