// **Question 7**

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"

function decodeString(s) {
    const stack = [];
    
    for (let char of s) {
      if (char !== ']') {
        stack.push(char);
      } else {
        // Pop characters until '[' is encountered
        let curr = stack.pop();
        let str = '';
        
        while (curr !== '[') {
          str = curr + str;
          curr = stack.pop();
        }
        
        // Pop repetition count
        let count = '';
        curr = stack.pop();
        
        while (!isNaN(curr)) {
          count = curr + count;
          curr = stack.pop();
        }
        
        stack.push(curr); // Push back the non-digit character
        stack.push(str.repeat(Number(count))); // Repeat the string and push back to the stack
      }
    }
    
    return stack.join('');
  }
  
  // Example usage
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString); // Output: "aaabcbc"  