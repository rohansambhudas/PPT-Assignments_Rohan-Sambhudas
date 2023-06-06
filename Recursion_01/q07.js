// **Question 7**

// Given a string S, the task is to write a program to print all permutations of a given string.

// **Example 1:**

// ***Input:***

// *S = “ABC”*

// ***Output:***

// *“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

// **Example 2:**

// ***Input:***

// *S = “XY”*

// ***Output:***

// *“XY”, “YX”*

function permute(str, left, right, result) {
    if (left === right) {
      result.push(str.join(''));
    } else {
      for (let i = left; i <= right; i++) {
        swap(str, left, i);
        permute(str, left + 1, right, result);
        swap(str, left, i); // backtrack
      }
    }
  }
  
  function swap(str, i, j) {
    const temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }
  
  function printPermutations(S) {
    const str = S.split('');
    const result = [];
  
    permute(str, 0, str.length - 1, result);
  
    return result;
  }
  
  // Example usage
  console.log(printPermutations("ABC")); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
  console.log(printPermutations("XY")); // Output: ["XY", "YX"]  