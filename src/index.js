import validFunctions from "./validFunctions";
import chain from "./chain";
import asyncChain from "./asyncChain";

const main = (chainingFunction) => (input, functions) => {
  if (!validFunctions(functions)) {
    // Handle this problem
    throw new Error(`Invalid input for "functions" argument.`);
  }
  return chainingFunction(input, functions);
};

export default {
  chain: main(chain),
  asyncChain: main(asyncChain),
};
