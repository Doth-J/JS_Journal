// Source: https://nodejs.dev/en/learn/asynchronous-flow-control/
//
// ERROR CONVENTIONS
// In Node.js, it is considered standard practice to handle errors in asynchronous functions by
// returning them as the first argument to the current function's callback. If there is an error,
// the first parameter is passed an Error object with all the details.
// Otherwise, the first parameter is null
// 

const isTrue = function(value, callback) {
  if (value === true) {
    callback(null, "Value was true.");
  }
  else {
    callback(new Error("Value is not true!"));
  }
}

const callback = function (error, retval) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(retval);
}

// Note: when calling the same asynchronous function twice like this, you are in a race condition.
// You have no way of knowing for certain which callback will be called first when calling the functions in this manner.

isTrue(false, callback);
isTrue(true, callback);

// 
// The callback function shows the reason for this: it allows a user to easily know whether or not an error occurred. 
// If null was not the first argument passed on success, the user would need to check the object being returned and 
// determine themselves whether or not the object constituted an error - a much more complex and less user-friendly approach.
//
// 1. So to wrap it all up, when using callbacks, if an error comes up, then pass it as the first argument. 
// 2. Otherwise, pass null first, and then your return arguments. 
// 3. On the receiving end, inside the callback function, check if the first parameter is non-null. 
// 4. If it is non-null, then handle it as an error.
// 