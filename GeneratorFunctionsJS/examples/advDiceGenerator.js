function* throwDice(amount, sides){
    for(let dice=amount; dice>0; dice--){
        yield Math.floor(Math.random() * sides) + 1;
    }
}

let [dices,sides,diceNum] = [process.argv[2],process.argv[3]];
let rollDice = throwDice(dices,sides);
for(const dice of rollDice){
    console.log(parseInt(dices),":Dice Number ->",dice);
    dices--;
}