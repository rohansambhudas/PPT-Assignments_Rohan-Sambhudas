// **Question 5**

// You are given a string **S**, the task is to reverse the string using stack.

// **Example 1:**

// Input: S="GeeksforGeeks"
// Output: skeeGrofskeeG

function reverseString(S) {
    const stack = [];
    const reversedString = [];
  
    // Push each character onto the stack
    for (let i = 0; i < S.length; i++) {
      stack.push(S[i]);
    }
  
    // Pop each character from the stack and append it to reversedString
    while (stack.length > 0) {
      reversedString.push(stack.pop());
    }
  
    return reversedString.join('');
  }
  
  // Example usage
  const S = "GeeksforGeeks";
  const reversed = reverseString(S);
  console.log(reversed); // Output: skeeGrofskeeG  