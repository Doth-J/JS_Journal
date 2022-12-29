// Examples: Initiator Style / Input
//
// EXERCISE
// Create a function that takes an input, invokes the middleware function
// which in turn will invoke a terminator function that returns an object 
// with the original input and the type of this input. 
//
// SOLUTION
// Build the following functional control flow components:
// 
// 1. Initiator: will receive input and invoke middleware with callback for logging the result.
// 2. Middleware: will receive input and a callback and return the terminator. 
// 3. Terminator: will receive input and a callback and return an object with the initial input and it's type.
// 

function initiator(input){
    middleware(input,(result)=>{
        console.log(result)
    })
}

function middleware(input,callback){
    console.log("[!] Middleware Execution for",input)
    return terminator(input,callback);
}

function terminator(input,callback){
    callback({
        input:input,
        type:'Your input is of type: '+typeof input
    });
}

initiator("My input")
