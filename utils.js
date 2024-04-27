// Credit to ChatGPT for explaining Jest, assistance with code, and code comments.
// Define a function named multiply that takes two parameters, a and b, and returns their multiplication.
function multiply(a, b) {
  return a * b;
}

// Define a function named isPrime that checks if a number is prime.
function isPrime(number) {
  // Check if the number is less than or equal to 1, which is not prime.
  if (number <= 1) {
    return false;
  }

  // Loop through numbers from 2 up to the square root of the given number.
  // If any of these numbers evenly divides the given number, it's not prime.
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // If no divisor is found, the number is prime.
  return true;
}

// Export the multiply and isPrime functions so they can be used in other modules.
module.exports = {
  multiply,
  isPrime,
};
