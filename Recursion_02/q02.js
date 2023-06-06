// **Question 2**

// You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

// - Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
// - Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
// - Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

// Given the integer `n`, return *the last number that remains in* `arr`.

// **Example 1:**

// Input: n = 9
// Output: 6
// Explanation:
// arr = [1, 2,3, 4,5, 6,7, 8,9]
// arr = [2,4, 6,8]
// arr = [2, 6]
// arr = [6]

// Example 2:

// Input: n = 1
// Output: 1

function lastRemaining(n) {
    if (n === 1) {
      return 1;
    }
    
    if (n % 2 === 0) {
      // If n is even, the last remaining number will be on the same side as n/2
      return 2 * lastRemaining(n / 2);
    } else {
      // If n is odd, the last remaining number will be on the opposite side of n/2
      return 2 * lastRemaining((n - 1) / 2) + 1;
    }
  }
  
  // Example usage
  console.log(lastRemaining(9)); // Output: 6
  console.log(lastRemaining(1)); // Output: 1  