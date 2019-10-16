const { chain } = require('../src');

const addOne = (n) => n + 1;

/**
 * Numbers
 */
test('0 + 1 = 1', () => {
  expect(chain(0, [addOne])).toBe(1);
});

test('1 + 1 + 1 = 3', () => {
  expect(chain(1, [addOne, addOne])).toBe(3);
});

test('2 + 1 + 1 + 1 = 5', () => {
  expect(chain(2, [addOne, addOne, addOne])).toBe(5);
});

/**
 * Strings
 */
const testString = 'Test string';
const mutateString = (str) => `#${str}#`;

test('Mutate string', () => {
  expect(chain(testString, [mutateString])).toBe(`#${testString}#`);
});

test('Mutate string with number', () => {
  expect(chain(testString, [mutateString, addOne])).toBe(`#${testString}#1`);
});

/**
 * Bad input
 */
test('One faulty function', () => {
  expect(() => {
    chain(0, [addOne, 'addOne', addOne]);
  }).toThrow();
});

test('One faulty function', () => {
  expect(() => {
    chain(0, 'This is not an array!');
  }).toThrow();
});

test('One faulty function', () => {
  expect(() => {
    chain(0, 1);
  }).toThrow();
});

test('One faulty function', () => {
  expect(() => {
    chain(0, { foo: 'foo' });
  }).toThrow();
});