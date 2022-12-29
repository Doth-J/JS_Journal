# GeneratorFunctionsJS :pushpin:

This repository contains theory examples and exercises for Generator Functions, the documentation can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

## <u>Description</u> :paperclip:
In JavaScript, a generator function is a special kind of function that can be paused and resumed multiple times, allowing you to execute code asynchronously in a sequential manner. Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
Generators in JavaScript — especially when combined with Promises — are a very powerful tool for asynchronous programming as they mitigate — if not entirely eliminate -- the problems with callbacks, such as Callback Hell and Inversion of Control. However, an even simpler solution to these problems can be achieved with async functions.

### <u>Definition</u> :name_badge:
They are defined using the **function\*** syntax, they use the **yield** keyword to pause the execution of the function and return a value to the generator's caller. When the generator function is resumed, it continues executing from the point where it left off.

### <u>Calling Generators</u> :telephone_receiver:
Calling a generator function does not execute its body immediately, a generator object for the function is returned instead. When the iterator's **next()** method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The **next()** method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value, as a boolean. Calling the **next()** method with an argument will resume the generator function execution, replacing the yield expression where an execution was paused with the argument from **next()**.

<img style="background-color:white;text-align:center;" src="https://www.programiz.com/sites/tutorial2program/files/generator-function.png" width="500px" height="285px">

A return statement in a generator, when executed, will make the generator finish (i.e. the done property of the object returned by it will be set to true). If a value is returned, it will be set as the value property of the object returned by the generator. Much like a return statement, an error thrown inside the generator will make the generator finished — unless caught within the generator's body. When a generator is finished, subsequent **next()** calls will not execute any of that generator's code, they will just return an object of this form: {value: undefined, done: true}.

### <u>Where to use?</u>
They are often used to perform asynchronous tasks, such as making network requests or reading from a file, in a more synchronous and sequential manner. They can also be used to implement iterators and infinite sequences.

## Examples :package:
Inside the examples directory you can find examples on Generator Functions.

## Exercises :zap:
Inside the exercises directory you can find various exercise flows with solution on the concepts of Generator Functions.
