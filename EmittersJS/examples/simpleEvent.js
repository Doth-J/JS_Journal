const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

function newEvent(event,message){
    console.log("[!] Emitting:",event,"with message:",message)
    eventEmitter.emit(event,message);
}

function receiveEvent(event, callback){
    eventEmitter.on(event,callback);
}

function start(){
    receiveEvent('event',(message)=>{
        console.log("[*] Received:",message);
    })

    newEvent("event","Hello World")
}

start();

module.exports = {newEvent,receiveEvent}