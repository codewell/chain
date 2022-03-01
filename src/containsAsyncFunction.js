export const containsAsyncFunction = (functions) =>
  functions.map((fn) => fn.constructor.name === "AsyncFunction").includes(true);
