// Source: https://nodejs.dev/en/learn/asynchronous-flow-control/
//
// IN SERIES PATTERN
// In series: functions will be executed in a strict sequential order, this one is most similar to for loops.

// operations defined elsewhere and ready to execute
const operations = [
    { func: function1, args: args1 },
    { func: function2, args: args2 },
    { func: function3, args: args3 },
  ];
  
function executeFunctionWithArgs(operation, callback) {
// executes function
const { args, func } = operation;
func(args, callback);
}

function serialProcedure(operation) {
if (!operation) process.exit(0); // finished
executeFunctionWithArgs(operation, function (result) {
    // continue AFTER callback
    serialProcedure(operations.shift());
});
}
  
  serialProcedure(operations.shift());