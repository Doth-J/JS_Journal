// Keep in mind that the yield keyword can only be used inside generator functions, and it can only be used to pause the execution 
// of the generator and return a value to the caller. It cannot be used to execute code or return a value in other contexts.

function* throwDice(amount){
    for(let dice=amount; dice>0; dice--){
        yield Math.floor(Math.random() * 6) + 1;
    }
}

let dices = 3;
const rollDice = throwDice(dices);
for(const roll of rollDice){
    console.log(dices," :Dice Number ->",roll);
    dices--;
}
