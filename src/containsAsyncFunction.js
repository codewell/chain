// Check if an array of functions contains an async function

const filter = (func) => func.constructor.name === "AsyncFunction";

const containsAsyncFunction = (functions) =>
  functions.filter(filter).length > 0;

export default containsAsyncFunction;
