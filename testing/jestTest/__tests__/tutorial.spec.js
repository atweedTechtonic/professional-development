const { TestScheduler } = require('jest');
//const multiply = require('../tutorial'); NO GOOD

const { multiply } = require('../tutorial');

describe('test multiply positive scenarios', () => {
  test('multiple 7 * 7 should be 49', () => {
    expect(multiply(7, 7)).toBe(49);
  });
  expect(multiply(7, 7)).toBeGreaterThan(30);
  expect(multiply(7, 7)).toBeLessThan(57);
  expect(multiply(7, 7)).toBeLessThanOrEqual(60);
});

test('Object example', () => {
  const data = { first: 1 };
  data['second'] = 2;
  expect(data).toEqual({ first: 1, second: 2 });
});

test('multiply 4 * 3 should not equal to 11', () => {
  expect(multiply(4, 3)).not.toBe(11);
});

test('there is pool in Liverpool', () => {
  expect('Liverpool').toMatch(/pool/);
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

const carStock = ['BMW', 'Mercedes', 'Ferrari', 'Toyota'];

test('that the car stock list has a Ferrari', () => {
  expect(carStock).toContain('Ferrari');
});
