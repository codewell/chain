/**
 * Check if the input is an array containing functions
 * @param {*} functions
 */
export const validFunctions = (functions) =>
  !functions.map((fn) => typeof fn === "function").includes(false);
