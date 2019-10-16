const { asyncChain } = require('../src');

const addOne = async (n) => {
  try {
    return n + 1
  } catch (error) {
    return error;
  }
};

/**
 * Numbers
 */
test('0 + 1 = 1', async () => {
  expect(await asyncChain(0, [addOne])).toBe(1);
});

test('1 + 1 + 1 = 3', async () => {
  expect(await asyncChain(1, [addOne, addOne])).toBe(3);
});

test('2 + 1 + 1 + 1 = 5', async () => {
  expect(await asyncChain(2, [addOne, addOne, addOne])).toBe(5);
});

/**
 * Strings
 */
const testString = 'Test string';
const mutateString = async (str) => {
  try {
    return `#${str}#`;
  } catch (error) {
    return error;
  }
};

test('Mutate string', async () => {
  expect(await asyncChain(testString, [mutateString])).toBe(`#${testString}#`);
});

test('Mutate string with number', async () => {
  expect(await asyncChain(testString, [mutateString, addOne])).toBe(`#${testString}#1`);
});

/**
 * Bad input
 */
test('One faulty function', () => {
  expect(() => {
    asyncChain(0, [addOne, 'addOne', addOne]);
  }).toThrow();
});

test('One faulty function', () => {
  expect(() => {
    asyncChain(0, 'This is not an array!');
  }).toThrow();
});

test('One faulty function', () => {
  expect(() => {
    asyncChain(0, 1);
  }).toThrow();
});

test('One faulty function', () => {
  expect(() => {
    asyncChain(0, { foo: 'foo' });
  }).toThrow();
});