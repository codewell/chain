/**
 * Chaining function
 * 
 * The output of the first function will
 * be the input of the next.
 * 
 * @param {any} input - Any initial input value that works for the first function
 * @param {[function]} functions - Array of functions to be chained
 * @returns {any} - Returns the output of the last function
 */
const chain = (input, functions) => {
  try {
    if (functions.length === 1) {
      return functions[0](input);
    }
    return chain(functions[0](input), functions.slice(1));
  } catch (error) {
    throw `Failed to chain ${functions} with input ${input}. ERROR: ${error.message}`;
  }
};

module.exports = chain;