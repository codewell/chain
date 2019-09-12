const validFunctions = require('./validFunctions');
const chain = require('./chain');

const main = (input, functions) => {
  if (!validFunctions(functions)) {
    // Handle this problem
    throw new Error(`Invalid input for "functions" argument.`)
  }
  return chain(input, functions)
}

module.exports = main;
