"use strict";

/**
 * Check if the input is an array containing functions
 * @param {*} functions
 */
var validFunctions = (functions) => {
  var allAreFunctions = functions
    .map((fn) => (typeof fn === "function" ? 1 : 0))
    .reduce((sum, value) => sum * value, 1);

  if (allAreFunctions === 0) {
    return false;
  }

  return true;
};

/**
 * Chaining function
 *
 * The output of the first function will
 * be the input of the next.
 *
 * @param {any} input - Any initial input value that works for the first function
 * @param {[function]} functions - Rest of the arguments is an array of functions to be chained
 * @returns {any} - Returns the output of the last function
 */
var syncChain = function syncChain(input) {
  for (
    var _len = arguments.length,
      functions = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    functions[_key - 1] = arguments[_key];
  }

  try {
    var [nextFunction] = functions;
    var nextValue = nextFunction(input);

    if (functions.length === 1) {
      return nextValue;
    }

    return syncChain(nextValue, ...functions.slice(1));
  } catch (error) {
    throw "Failed to chain "
      .concat(functions, " with input ")
      .concat(input, ". ERROR: ")
      .concat(error.message);
  }
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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
var asyncChain = /*#__PURE__*/ (function () {
  var _ref = _asyncToGenerator(function* (input) {
    for (
      var _len = arguments.length,
        functions = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      functions[_key - 1] = arguments[_key];
    }

    try {
      var [nextFunction] = functions;
      var nextValue = yield nextFunction(input);

      if (functions.length === 1) {
        return nextValue;
      }

      return yield asyncChain(nextValue, ...functions.slice(1));
    } catch (error) {
      throw "Failed to chain "
        .concat(functions, " with input ")
        .concat(input, ". ERROR: ")
        .concat(error.message);
    }
  });

  return function asyncChain(_x) {
    return _ref.apply(this, arguments);
  };
})();

// Check if an array of functions contains an async function
var filter = (func) => func.constructor.name === "AsyncFunction";

var containsAsyncFunction = (functions) => functions.filter(filter).length > 0;

var chain = function chain() {
  for (
    var _len = arguments.length, parameters = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    return null;
  }

  var [nextValue] = parameters;

  if (parameters.length === 1) {
    return nextValue;
  }

  var functions = parameters.slice(1);

  if (!validFunctions(functions)) {
    // Handle this problem
    throw new Error('Invalid input for "functions" argument.');
  }

  if (containsAsyncFunction(functions)) {
    return asyncChain(nextValue, ...functions);
  }

  return syncChain(nextValue, ...functions);
};

module.exports = chain;
