// **Question 2**

// Given a number n, find the sum of the first natural numbers.

// **Example 1:**

// Input: n = 3 

// Output: 6

// **Example 2:**

// Input  : 5 

// Output : 15

function sumOfNaturalNumbers(n) {
    if (n === 1) {
      return 1;
    }
  
    return n + sumOfNaturalNumbers(n - 1);
  }
  
  // Example usage
  console.log(sumOfNaturalNumbers(3)); // Output: 6
  console.log(sumOfNaturalNumbers(5)); // Output: 15  