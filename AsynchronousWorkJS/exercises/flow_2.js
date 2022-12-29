// Examples: Error Convention
//
// EXERCISE
// Create a function that takes a number input and a callback function
// where the callback utilizes the error convention practice to handle errors.
//
// SOLUTION
// The error convention practice requires the callback function to return two variables:
// - The first variable signifies the error produced by the function operation:
//      1. Success: null - no Error produced
//      2. Failure: new Error("Something went wrong!") - Error produced)
// - The second variable is used for the function operation result. 
// 
// Build the following functional control flow components:
// 1. isEven: will receive a number input and a callback, check if the number is even and invoke the callback with an error if number is odd.
// 1. isOdd: will receive a number input and a callback, check if the number is odd and invoke the callback with an error if number is even.  
// 2. errorHandler: will receive as inputs an error and a result. It will log if an error has occured and the result.
// 

function isEven(number,callback){
    if(number % 2 == 0 ){
        callback(null,"Number is even!");
    }else{
        callback(new Error("This check is for even numbers!"),"Number is odd!")
    }
}
function isOdd(number,callback){
    if(number % 2 == 1 ){
        callback(null,"Number is odd!");
    }else{
        callback(new Error("This check is for odd numbers!"),"Number is even!")
    }
}

function errorHandler(error,result){
    if(error){
        console.log(error);
        return
    }
    console.log(result);
    return result
}
  
isEven(2,errorHandler)
isEven(3,errorHandler)

isOdd(2,errorHandler)
isOdd(3,errorHandler)