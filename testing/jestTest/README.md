# Notes from Jest Tutorial

https://testautomationu.applitools.com/jest-testing-tutorial/

## Script for package.json:

```
 "scripts": {
    "test": "jest --verbose --watchAll --coverage"
  },
```

## Sample Test Suite:

```
describe('test multiply positive scenarios', () => {
  test('multiple 7 * 7 should be 49', () => {
    expect(multiply(7, 7)).toEqual(49);
  });
});
```

## Matchers are methods that let you test your values

#### Use a matcher in conjunction with a .expect

#### Most common matches are toBe and toEqual

- toBe() uses strict equality.
- toEqual() tests the value of an object
- not.toBe() opp of toBe
- toMatch() - string matches
- toBeGreaterThan() - number compare
- toBeLessthan() - number compare
- toBeGreaterThanOrEqual() - number compare
- toBeLessthanOrEqual() - number compare
- toBeNull()
- toBeDefined();
- not.toBeUndefined();
- not.toBeTruthy();
- toBeFalsy();
- toContain() - array item matcher
- beforeEach() - run some code before many tests
- afterEach - run some code after many tests
- beforeAll - run some code just 1 time before all tests
- afterAll - run some code 1 time after all test

## Test only some or skip tests

- test.only
- test.skip

## Dealing with async code (i.e. http requests)

- make sure to include await keyword

## Snapshot Testing - useful to test UI

#### Compares test to rendered UI

- toMatchSnapshot() - comparison function
