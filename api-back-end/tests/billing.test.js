import { costCalculator } from "../libs/billing-lib";

// In this test we are attempting to store 10 items.
test("Lowest tier", () => {
  const storage = 10;

  const cost = 4000;
  const expectedCost = costCalculator(storage);

  expect(cost).toEqual(expectedCost);
});

// In this test we are attempting to store 100 items.
test("Middle tier", () => {
  const storage = 100;

  const cost = 20000;
  const expectedCost = costCalculator(storage);

  expect(cost).toEqual(expectedCost);
});

// In this test we are attempting to store 101 items.
test("Highest tier", () => {
  const storage = 101;

  const cost = 10100;
  const expectedCost = costCalculator(storage);

  expect(cost).toEqual(expectedCost);
});

// npm test
// Expected values to be yield / Results

// PASS  tests/billing.test.js
// ✓ Lowest tier (4ms)
// ✓ Middle tier
// ✓ Highest tier (1ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        1.665s
// Ran all test suites.