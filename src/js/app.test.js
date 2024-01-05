/**
 * @jest-environment jsdom
 */

import Validator from "./app";

test("Luhn check passed", () => {
  const validator = new Validator();
  const expected = validator.checkLuhn(4111111111111111);
  expect(expected).toBe(true);
});

test("Luhn check not passed", () => {
  const validator = new Validator();
  const expected = validator.checkLuhn(411111111111);
  expect(expected).toBe(false);
});
