import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should return the sum of two positive numbers", () => {
  // Arrange
  const a = 5;
  const b = 10;

  // Action
  const result = sum(a, b);

  // Assert
  assert.strictEqual(result, 15);
});

test("should return 0 when one of the numbers is negative", () => {
  // Arrange
  const a = -5;
  const b = 10;

  // Action
  const result = sum(a, b);

  // Assert
  assert.strictEqual(result, 0);
});

test("should return 0 when both numbers are negative", () => {
  // Arrange
  const a = -5;
  const b = -10;

  // Action
  const result = sum(a, b);

  // Assert
  assert.strictEqual(result, 0);
});

test("should return 0 when one of the arguments is not a number", () => {
  // Arrange
  const a = "5";
  const b = 10;

  // Act
  const result = sum(a, b);

  // Assert
  assert.strictEqual(result, 0);
});

test("should return 0 when both arguments are not numbers", () => {
  // Arrange
  const a = "5";
  const b = "10";

  // Action
  const result = sum(a, b);

  // Assert
  assert.strictEqual(result, 0);
});

test("should return 0 when both numbers are zero", () => {
  // Arrange
  const a = 0;
  const b = 0;

  // Action
  const result = sum(a, b);

  // Assert
  assert.strictEqual(result, 0);
});
