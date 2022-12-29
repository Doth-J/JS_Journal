const EventEmitter = require('events');

class Eventifier{
    constructor(obj){
        this.obj = obj
        this.emitter = new EventEmitter()
    }

    syncEventifiers(other){
        this.emitter = other.emitter;
    }

    emitEvent(event,message){
        this.emitter.emit(event,message);
    }

    listenForEvent(event,callback){
        this.emitter.on(event,callback);
    }
}

module.exports = Eventifier;