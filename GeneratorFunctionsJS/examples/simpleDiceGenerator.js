// In JavaScript, the yield keyword is used to pause the execution of a generator function and return a value to the generator's caller. 
// A generator function is a special kind of function that can be paused and resumed multiple times, allowing you to execute code asynchronously in a sequential manner.

function* throwDice(){
    yield Math.floor(Math.random() * 6) + 1;
}

const dice = throwDice();
console.log("Dice Number:",dice.next().value);
console.log("Is complete:",dice.next().done);