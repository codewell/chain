/**
 * Chaining function
 *
 * The output of the first function will
 * be the input of the next.
 *
 * @param {any} input - Any initial input value that works for the first function
 * @param {[function]} functions - Rest of the arguments is an array of functions to be chained
 * @returns {any} - Returns the output of the last function
 */
const syncChain = (input, ...functions) => {
  try {
    const [nextFunction] = functions;
    const nextValue = nextFunction(input);

    if (functions.length === 1) {
      return nextValue;
    }

    return syncChain(nextValue, ...functions.slice(1));
  } catch (error) {
    throw `Failed to chain ${functions} with input ${input}. ERROR: ${error.message}`;
  }
};

export default syncChain;
