const validFunctions = require('./validFunctions');
const chain = require('./chain');
const asyncChain = require('./asyncChain');

const main = (chainingFunction) => (input, functions) => {
  if (!validFunctions(functions)) {
    // Handle this problem
    throw new Error(`Invalid input for "functions" argument.`)
  }
  return chainingFunction(input, functions)
}

module.exports = {
  chain: main(chain),
  asyncChain: main(asyncChain),
};
