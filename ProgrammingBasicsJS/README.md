<h1> Programming Basics :computer: </h1> 
This repository contains theory examples and exercises for programming basics of Javascript. Definitions along with examples on important fundamental aspects of the Javascript language. 

- [Variables :memo:](#variables-memo)
  - [Types](#types)
  - [Declaration Syntax](#declaration-syntax)
- [Arrays :memo:](#arrays-memo)
- [Objects :memo:](#objects-memo)
- [Functions :memo:](#functions-memo)
- [Control Flow :memo:](#control-flow-memo)

## Variables :memo:
In order to begin creating anything, we need a way to define a **variable**  which is a a *container* that can hold a *value*.

 ```javascript
 let <Name> = <Value>;
 
 // Abstract Javascript Variable Container Visualization

<Type><Name>
| <Value> |
+---------+

 /* 
 - Variables defined by JS in this code block:
   - <Type> "<Name>" <Value>
 */
 ```
> The **`let`** declaration declares a _block-scoped local variable_ that can hold values of any **type**, optionally initializing it to a given **value**.
> 
To do that it is important to understand the concept of a **variable**, let's go through a hands-on example below:

1. First let's define a variable called **a** holding the value 11, do that with the keyword **let** followed by a *name*, the assignment operator *=* and the *value* to hold. This keyword instructs JS that it should create a variable *container* to hold some kind of *value*, name that container with the given *name* and put the *value* given inside the *container*:

```javascript
let a = 11;

// Abstract Javascript Variable Container Visualization

<number><a>
|   1 1   |
+---------+

/*
- Variables defined by JS in this code block:
  - number "a" 11
*/      
```

1. Let's define another variable called **b** that is going to hold the value 22. Again utilize the **let** keyword as you seen on the following code block:

```javascript
let a = 11;
let b = 22;

// Abstract Javascript Variable Container Visualization

<number><a>  <number><b> 
|   1 1   |  |   2 2   |
+---------+  +---------+
/*
- Variables defined by JS in this code block:
  - number "a" 11
  - number "b" 22
*/      
```
1. Finally let's define another variable called **c** that is going to be the *result* of "a" **plus** "b":
```javascript
let a = 11;
let b = 22;
let c = a + b;

// Abstract Javascript Variable Container Visualization

<number><a>  <number><b>  <number><c> 
|   1 1   |  |   2 2   |  |  a + b  |
+---------+  +---------+  |   3 3   |
                          +---------+
/*
- Variables defined by JS in this code block:
  - number "a" 11
  - number "b" 22
  - number "c" 33
*/      
```   

 In the example above the three containers created are **number** variables. Behind the scenes, when JS sees the **`let`** keyword, it creates the variable *container* with the given *name*, it then check's the *type* of the value and adds the *value* inside the *container*. ``JS is a dynamically-typed language, which means that the type of a value is determined at runtime`` - *that is, when you execute / run your program*.

### Types
There are a few different types of values that a Javascript variable can hold:

- **Numbers**: JavaScript has a single type for representing numbers, which includes both integers and floating-point values. There is no separate type for representing integers or decimals.
 
  ```javascript
   let a = 5;
   let b = 2.345;

  // Abstract Javascript Variable Container Visualization
 
  <number><a>  <number><b> 
  |    5    |  |  2.345  |
  +---------+  +---------+

  /*
  - Variables defined by JS in this code block:
    - number "a" 5
    - number "b" 2.345
  */
   ```

- **Strings**: Strings are used to represent text. They can be enclosed in single quotes ('') or double quotes ("").
 
  ```javascript
   let str1 = "hello";
   let str2 = 'world';
   let message = str1 + " " + str2;

  // Abstract Javascript Variable Container Visualization

  <string><str1>  <string><str2>  <string><message>
  |   "hello"  |  |   'world'  |  | str1+" "+str2 |
  +------------+  +------------+  | "hello world" |
                                  +---------------+

  /*
  - Variables defined by JS in this code block:
    - string "str1" "hello"
    - string "str2" 'world'
    - string "message" "hello world"
  */
   ```
   
- **Booleans**: Booleans represent a true or false value.
 
  ```javascript
   let truthy = true;
   let falsy = false;

   // Abstract Javascript Variable Container Visualization

   <boolean><truthy>  <boolean><falsy>     
   |     true     |   |    false    |     
   +--------------+   +-------------+     
                                
   /*
   - Variables defined by JS in this code block:
     - boolean "truthy" true
     - boolean "falsy" false
   */
   ```
   
- **Objects**: Objects are collections of key-value pairs. They are used to represent complex data structures, such as records or data models.
 
  ```javascript
   let myobject = {number:123,message:"hello world"};

   // Abstract Javascript Variable Container Visualization

   <object><myobject>======================+
   | <number><number>   <string><message>  |
   | |     1 2 3    |   | "hello world" |  |
   | +--------------+ , +---------------+  |
   +=======================================+

  /*
  - Variables defined by JS in this code block:
    - object "myobject" {
      - number "number" 123
      - string "message" "hello world"
      }
  */
   ```
   
- **Arrays**: Arrays are ordered collections of values. They can hold values of any type, including other arrays. Arrays are also indexed, which means each value inside the Array can be referenced by it's position in the Array instead of a *Name*.
 
  ```javascript
   let array = [1,2.5,true,"astring",'anotherone'];

   // Abstract Javascript Variable Container Visualization

   <object><array>================================================================+
   | <number><0>   <number><1>   <boolean><2>   <string><3>_   <string><4>_____   |
   | |    1    |   |   2.5   |   |   true   |   | "astring" |   | 'anotherone' |  |  
   | +---------+ , +---------+ , +----------+ , +-----------+ , +--------------+  |   
   +==============================================================================+     
                                
  /*
  - Variables defined by JS in this code block:
    - object "array" [
        number "0" 1,
        number "1" 2.5,
        boolean "2" true,
        string "3" "astring"
        string "4" 'anotherone'
        ]
  */
   ```
   
- **Functions**: Functions are blocks of code that can be defined and then called by name. They are often used to perform a specific task or calculation.
 
  ```javascript
   let func = function getMessage(){
        return "hello world";
   };
   
   func(); // "hello world"

  // Abstract Javascript Variable Container Visualization

  <function><func>=======+
  | <String><getMessage> |
  | |   "hello world"  | |
  | +------------------+ |
  +======================+
  
  /*
  - Variables defined by JS in this code block:
    - function "func" {
        - string "getMessage" "hello world"
    }
  */
   ```
   
- **Null**: The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations. Null expresses a lack of identification, indicating that a variable points to no object.
 
  ```javascript
   let nully = null;

   // Abstract Javascript Variable Container Visualization

   <object><nully>
   |    null     |
   +=============+

   /*
  - Variables defined by JS in this code block:
    - object "nully" null
  */
   ```
   
- **Undefined**: The undefined value represents a value that has not been assigned a value.  A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.

 
  ```javascript
   let newvariable;

  // Abstract Javascript Variable Container Visualization

  <undefined><newvariable>
  |    undefined      |
  +===================+
   
   /*
  - Variables:
    - undefined "newvariable" undefined
  */
   ```
     
It's important to note that, in JavaScript, variables do not have a fixed type. This means that a variable can hold a value of any type, and the type of the value can change over the course of a program. This is known as ``dynamic typing``.

### Declaration Syntax

## Arrays :memo:

## Objects :memo:
   
## Functions :memo:
   
## Control Flow :memo: