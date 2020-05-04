import validFunctions from "./validFunctions";
import syncChain from "./syncChain";
import asyncChain from "./asyncChain";
import containsAsyncFunction from "./containsAsyncFunction";

const chain = (...parameters) => {
  if (parameters.length === 0) {
    return null;
  }

  const [nextValue] = parameters;
  if (parameters.length === 1) {
    return nextValue;
  }

  const functions = parameters.slice(1);

  if (!validFunctions(functions)) {
    throw new Error(`Invalid function argument.`);
  }

  if (containsAsyncFunction(functions)) {
    return asyncChain(nextValue, ...functions);
  }

  return syncChain(nextValue, ...functions);
};

export default chain;
