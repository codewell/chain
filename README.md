# Chain
*JavaScript function for chaining functions*

## Description
The `chain` function takes two parameters
`input` which is the initial input to the first function in the `functions` argument.
The second argument, `functions`, is an array of functions that accept one argument.
The input will serve as input in the first function of the `functioons` array. The result of that function will be passed as the input for the next function and so on.

## Installation
```
npm install @codewell/chain
```

## Basic usage
```JavaScript
import chain from '@codewell/chain';

const foo = n => n + 3;
const bar = m => m * 5;

chain(1, [foo, bar]); // => 20
```
