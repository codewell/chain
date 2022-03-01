// Check if an array of functions contains an async function

const filter = (func) => func.constructor.name === "AsyncFunction";

export const containsAsyncFunction = (functions) =>
  functions.filter(filter).length > 0;
