// Credit to ChatGPT for explaining Jest, assistance with code, and code comments.
// Import the functions to be tested
const { multiply, isPrime } = require("./utils");

// Test cases for the multiply function
describe("multiply function", () => {
  test("multiply normal numbers", () => {
    // Test normal multiplication
    expect(multiply(2, 3)).toBe(6);
  });

  test("multiply by zero", () => {
    // Test multiplying by zero
    expect(multiply(5, 0)).toBe(0);
  });

  test("multiply negative numbers", () => {
    // Test multiplying negative numbers
    expect(multiply(-4, 3)).toBe(-12);
    expect(multiply(4, -3)).toBe(-12);
  });
});

// Test cases for the isPrime function
describe("isPrime function", () => {
  test("check prime numbers", () => {
    // Test prime numbers
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
  });

  test("check non-prime numbers", () => {
    // Test non-prime numbers
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
  });

  test("check negative input", () => {
    // Test negative input
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(-5)).toBe(false);
  });
});
