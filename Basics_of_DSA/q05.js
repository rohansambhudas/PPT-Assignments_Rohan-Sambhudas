// 5. **Ugly Numbers**

// An **ugly number** is a positive integer whose prime factors are limited to `2`, `3`, and `5`.

// Given an integer `n`, return *the* `nth` ***ugly number***.

// **Example 1:**

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

// **Constraints:**

// - `1 <= n <= 1690`

function nthUglyNumber(n) {
    const ugly = [1]; // Array to store the ugly numbers
    let idx2 = 0, idx3 = 0, idx5 = 0; // Pointers for each factor (2, 3, 5)
  
    while (ugly.length < n) {
      const nextUgly = Math.min(ugly[idx2] * 2, ugly[idx3] * 3, ugly[idx5] * 5);
      ugly.push(nextUgly);
  
      // Update the pointers based on the next ugly number
      if (nextUgly === ugly[idx2] * 2) idx2++;
      if (nextUgly === ugly[idx3] * 3) idx3++;
      if (nextUgly === ugly[idx5] * 5) idx5++;
    }
  
    return ugly[n - 1]; // Return the nth ugly number
  }
  
  // Test cases
  console.log(nthUglyNumber(10)); // Output: 12
  console.log(nthUglyNumber(1)); // Output: 1  