// **Question 4**

// Given a string calculate length of the string using recursion.

// **Examples:**

// Input : str = "abcd"
// Output :4

// Input : str = "GEEKSFORGEEKS"
// Output :13

function calculateLength(str) {
    // Base case: when the string is empty
    if (str === "") {
      return 0;
    }
  
    // Recursive case: remove the first character and calculate the length of the remaining string
    return 1 + calculateLength(str.slice(1));
  }
  
  // Example usage
  console.log(calculateLength("abcd")); // Output: 4
  console.log(calculateLength("GEEKSFORGEEKS")); // Output: 13  