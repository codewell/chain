# Chain

_JavaScript function for chaining functions_

## Description

The chaining function takes an arbitrary number of arguments. The first argument is of any type, the rest should all be functions sychronous or asychronous. Chain automatically returns a promise if one or more arguments is an async function. The first parameter is passed as input to the second argument (a funciton) which in turn is passed its return value to the next funciton and so on. E.g.

```JavaScript
chain(0,
  (n) => n + 1, // => 0 + 1
  (n) => n + 1 // => 1 + 1
);
// => 2
```

## Installation

```
npm install @codewell/chain
```

## Basic usage

```JavaScript
import chain from '@codewell/chain';

const foo = n => n + 3;
const bar = m => m * 5;

// Sync
const result = chain(1, foo, bar); // => 20

// Async
const asyncFoo = (n) => new Promise((resolve, reject) => {
  resolve(n + 3);
})

const asyncFoo = (m) => new Promise((resolve, reject) => {
  resolve(m * 5);
})

chain(1, asyncFoo, asyncBar)
  .then(result => {
    // Handle result somehow...
  })
```
