import { validFunctions } from "./validFunctions";
import { syncChain } from "./syncChain";
import { asyncChain } from "./asyncChain";
import { containsAsyncFunction } from "./containsAsyncFunction";

export const chain = (...parameters) => {
  if (parameters.length === 0) {
    return null;
  }

  const [nextValue, ...functions] = parameters;
  if (parameters.length === 1) {
    return nextValue;
  }

  if (!validFunctions(functions)) {
    throw new Error("Invalid function argument.");
  }

  if (containsAsyncFunction(functions)) {
    return asyncChain(nextValue, ...functions);
  }

  return syncChain(nextValue, ...functions);
};
