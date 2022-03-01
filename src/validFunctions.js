/**
 * Check if the input is an array containing functions
 * @param {*} functions
 */
export const validFunctions = (functions) => {
  const allAreFunctions = functions
    .map((fn) => (typeof fn === "function" ? 1 : 0))
    .reduce((sum, value) => sum * value, 1);

  if (allAreFunctions === 0) {
    return false;
  }

  return true;
};
