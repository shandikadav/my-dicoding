import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("sum function", () => {
  it("should return the correct sum of two positive numbers", () => {
    // Arrange
    const a = 1;
    const b = 2;
    const expected = 3;

    // Action
    const result = sum(a, b);

    // Assert
    assert.strictEqual(result, expected, "1 + 2 should equal 3");
  });

  it("should return the correct sum of two negative numbers", () => {
    // Arrange
    const a = -1;
    const b = -1;
    const expected = -2;

    // Action
    const result = sum(a, b);

    // Assert
    assert.strictEqual(result, expected, "-1 + -1 should equal -2");
  });

  it("should return 0 when both numbers are 0", () => {
    // Arrange
    const a = 0;
    const b = 0;
    const expected = 0;

    // Action
    const result = sum(a, b);

    // Assert
    assert.strictEqual(result, expected, "0 + 0 should equal 0");
  });

  it("should return the correct sum of two larger positive numbers", () => {
    // Arrange
    const a = 100;
    const b = 200;
    const expected = 300;

    // Action
    const result = sum(a, b);

    // Assert
    assert.strictEqual(result, expected, "100 + 200 should equal 300");
  });
});
