// Examples: In Series Pattern
//
// EXERCISE
// Using the in series function pattern, create a function that receives two
// numbers and evaluates the addition, subtraction, multiplication and division
// operations of the numbers and logs if an error occured during execution.
// 
// SOLUTION
// We will create an object of the math operations to be prepared for execution.
// We will then define a callback function for logging the errors occured in the math operations.
// We will also create an executor function for the math operation with error handling.
//  
// Build the following functional control flow components:
// 1. addition: will receive two numbers and return the sum.
// 2. subtraction: will receive two numbers and return the differnce.
// 3. multiplication: will receive two numbers and return the product.
// 4. division: will receive two numbers and return the dividend, IF divisor is not zero.
// 5. errorHandler: will receive a function, the arguments and a callback.This will log if an error occured and return the result.
// 6. executeOperation: will receive a math operation and a callback and invoke the math operation.
// 7. invokeMathOps: will receive the two numbers and a math operation to the math operations to invoke.
// 

function addition(a,b,cb){
    return cb(null,a+b)
}

function subtraction(a,b,cb){
    return cb(null,a-b);
}

function multiplication(a,b,cb){
    return cb(null,a*b);
}

function division(a,b,cb){
    if(b==0){
        return cb(new Error("Division with 0"),"Infinity!")
    }else{
        return cb(null,a/b);
    }
}

function errorHandler(func,args,callback){
    func(args[0],args[1],(error,result)=>{
        if(error){
            console.log(error)
        }
        callback(result);
    })
}

function executeOperation(args,operation,callback){
    const {func} = operation;
    errorHandler(func,args,callback);
}

const operations = [
    {func: addition, op:"+"},
    {func: subtraction,op:"-"},
    {func: multiplication,op:"*"},
    {func: division,op:"/"}
]

function invokeMathOps(args,operation){
    if(!operation) process.exit(0);
    executeOperation(args,operation,(result)=>{
        console.log(args[0],operation.op,args[1],"=",result)
        invokeMathOps(args,operations.shift());
    })
}

invokeMathOps([5,10],operations.shift());