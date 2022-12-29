# PromisesJS :pushpin:
This repository contains theory examples and exercises for Promises, the documentation can be found in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 
You should also check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

## <u>Description</u> :paperclip:
A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

### <u>Definition</u> :name_badge:
A Promise is _a proxy for a value not necessarily known when the promise is created_. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason

### <u>Promise States</u> :crystal_ball:
The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

<img src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png" height="250px">

A Promise is in one of these states:

- **pending**: initial state, neither fulfilled nor rejected.
- **fulfilled**: meaning that the operation was completed successfully.
- **rejected**: meaning that the operation failed.

## Examples :package:
Inside the examples directory you can find examples on Promises.

## Exercises :zap:
Inside the exercises directory you can find various exercise flows with solution on the concepts of Promises.
