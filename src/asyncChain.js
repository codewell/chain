/**
 * Async chaining function
 *
 * The output of the first function will
 * be the input of the next.
 *
 * @param {any} input - Any initial input value that works for the first function
 * @param {[function]} functions - Array of functions to be chained
 * @returns {any} - Returns the output of the last function
 */
export const asyncChain = async (input, ...functions) => {
  try {
    const [nextFunction] = functions;
    const nextValue = await nextFunction(input);

    if (functions.length === 1) {
      return nextValue;
    }

    return await asyncChain(nextValue, ...functions.slice(1));
  } catch (error) {
    throw `Failed to chain ${functions} with input ${input}. ERROR: ${error.message}`;
  }
};
