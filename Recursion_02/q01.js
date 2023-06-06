// Question 1

// Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

// An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33

// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.

// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

function isPowerOfThree(n) {
    if (n === 1) {
      return true;
    } else if (n < 1 || n % 3 !== 0) {
      return false;
    } else {
      return isPowerOfThree(n / 3);
    }
  }
  
  // Example usage
  console.log(isPowerOfThree(27)); // Output: true
  console.log(isPowerOfThree(0)); // Output: false
  console.log(isPowerOfThree(-1)); // Output: false  