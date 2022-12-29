// Examples: Full Parallel Pattern
//
// EXERCISE
// Using the full parallel function pattern, create a function that receives a list
// of persons with name and ages and evaluates if each person is an adult.
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
    console.log(person.name,ageCheck ? "is an adult" : "is not and adult") 
    ageCheck = person.age >= 18;
    if(!ageCheck){
        return errorHandler(new Error("Age Evaluation Error"),ageCheck,callback);
    }else{
        return errorHandler(null,ageCheck,callback);
    }
}

const persons = [
    new Person("Alice",20),
    new Person("Bob",30),
    new Person("Charlie",16),
    new Person("David",15),
    new Person("Ethan",18)
]

persons.forEach((person)=>{
    ageEvaluation(person,(result)=>{
        console.log(result)
    })
})