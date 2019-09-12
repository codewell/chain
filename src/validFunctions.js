/**
 * Check if the input is an array containing functions
 * @param {*} functions 
 */
const validFunctions = (functions) => {
  if (!Array.isArray(functions)) {
    return false;
  };

  const allAreFunctions = functions
    .map(fn => typeof fn === 'function' ? 1 : 0)
    .reduce((sum, value) => sum * value, 1);

  if (!allAreFunctions) {
    return false
  }

  return true;
};

module.exports = validFunctions;