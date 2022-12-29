// Examples: Limited Parallel Pattern
//
// EXERCISE
// Using the limited parallel function pattern, create a function that receives a list
// of persons with name and ages and evaluates if at least X persons are adults and who they are.
// 
// SOLUTION
// We will create a Person class with name and age variables.
// We will create an age evaluation function with a callback on each person check.
// We will then define a callback function for logging the errors occured in the age evaluation.
//  
// Build the following functional control flow components:
// 1. person (class): has name and age variables, creates person object.
// 2. errorHandler: will receive an error and a callback, it will log if an error occured and return the result. 
// 3. ageEvaluation: will receive a person object and a callback and return if the person is an adult.
// 4. found: will display the list of name of the adults found.
// 5. findAdults: will start the age evaluation process of finding adults.
// 

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

function errorHandler(error,result,callback){
    if(error){
        console.log(error);
    }
    callback(result)
}

function ageEvaluation(person,callback){
    ageCheck = person.age >= 18;
    if(!ageCheck){
        return errorHandler(new Error("Age Evaluation Error for "+person.name),ageCheck,callback);
    }else{
        return errorHandler(null,ageCheck,callback);
    }
}

const persons = [
    new Person("Alice",20),
    new Person("Bob",30),
    new Person("Charlie",16),
    new Person("David",21),
    new Person("Ethan",18),
    new Person("Homer",17),
    new Person("Ian",54),
    new Person("Kate",23),
    new Person("Larry",12),
    new Person("Monica",19),
]

const adults = [];
let adultsFound=0, adultsNum = 4;

function found(){
    console.log("Adults found:",adults);
}

function findAdults(){

    function isAdult(person){
        if(!person || adultsFound == adultsNum) return found();
        ageEvaluation(person,(result)=>{
            if(result) {
                adultsFound++;
                adults.push(person.name);
            }
            isAdult(persons.pop())
        })
    }
    isAdult(persons.pop())
}

findAdults();
