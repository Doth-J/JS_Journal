const Eventified = require('./examples/eventifier');

function start(){
    const alice = new Eventified("alice");
    const bob = new Eventified("bob");
    alice.syncEventifiers(bob);

    alice.listenForEvent('message',(message)=>{
        console.log("[A] Someone:",message)
    })
    bob.listenForEvent('message',(message)=>{
        console.log("[B] Someone:",message)
    })

    bob.emitEvent("message","Hello from Bob");
    alice.emitEvent("message","Hello from Alice");
}

start();