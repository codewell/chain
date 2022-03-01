# @codewell/chain

JavaScript function for chaining functions

## Description

The chaining function takes an arbitrary number of arguments. The first argument is of any type, the rest should all be functions sychronous or asychronous. Chain automatically returns a promise if one or more arguments is an async function. The first parameter is passed as input to the second argument (a funciton) which in turn is passed its return value to the next funciton and so on. E.g.

```JavaScript
chain(0,
  (n) => n + 1, // => 0 + 1
  (n) => n + 1 // => 1 + 1
);
// => 2
```

A requirement is therefore that all functions passed as arguments to the `chain` function has a return value (functions included).

## Installation

```
npm install @codewell/chain
```

## Basic usage

```JavaScript
import chain from '@codewell/chain';

const addThree = n => n + 3;
const multiplyByFive = m => m * 5;

chain(1, addThree, multiplyByFive);
// => 20
```

```JavaScript
// Async example
import chain from '@codewell/chain';

const addThreeAsync = (n) => new Promise((resolve, reject) => {
  resolve(n + 3);
})

const multiplyByFiveAsync = (m) => new Promise((resolve, reject) => {
  resolve(m * 5);
})

chain(1, addThreeAsync, multiplyByFiveAsync)
  .then(result => {
    // Handle result somehow...
  })
```
