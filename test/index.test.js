const devLib = require("../lib/dev");
const prodLib = require("../lib/dev");

const addOneSync = (n) => n + 1;

const addOneAsync = async (n) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 1);
    }, 100);
  });

/**
 *-----------------------------------------------
 */

test("No arguments (sync)", () => {
  expect(devLib()).toBe(null);
});

test("No arguments (async)", async () => {
  expect(await devLib()).toBe(null);
});

/**
 * One argument
 */

test("One argument (sync)", () => {
  expect(devLib("foo")).toBe("foo");
});

test("One argument (async)", async () => {
  expect(await devLib("foo")).toBe("foo");
});

/**
 * One argument one function
 */

test("One argument, one function (sync)", () => {
  expect(devLib(1, addOneSync)).toBe(2);
});

test("One argument, one function (async)", async () => {
  expect(await devLib(1, addOneAsync)).toBe(2);
});

/**
 * One argument, two functions
 */
test("One argument, two functions (sync)", () => {
  expect(devLib(1, addOneSync, addOneSync)).toBe(3);
});

test("One argument, two functions (async)", async () => {
  expect(await devLib(1, addOneAsync, addOneAsync)).toBe(3);
});

/**
 * Throw Errors
 */

test("Two values in a row throws", () => {
  expect(() => {
    devLib(0, 1);
  }).toThrow();
});

/**
 * A loooong list of functions
 */

test("A loooong list of functions (sync)", () => {
  expect(
    devLib(
      0,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
    ),
  ).toBe(12);
});

test("A loooong list of functions (async)", async () => {
  expect(
    await devLib(
      0,
      addOneAsync,
      addOneAsync,
      addOneAsync,
      addOneAsync,
      addOneAsync,
      addOneAsync,
      addOneAsync,
      addOneAsync,
      addOneAsync,
      addOneAsync,
      addOneAsync,
      addOneAsync,
    ),
  ).toBe(12);
});

test("A loooong list of functions, last one async (async)", async () => {
  expect(
    await devLib(
      0,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneSync,
      addOneAsync,
    ),
  ).toBe(12);
});
