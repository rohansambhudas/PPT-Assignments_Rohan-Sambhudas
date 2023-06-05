// **Question 2**

// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true

function checkValidString(s) {
    const stack = [];
    const starStack = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(i);
      } else if (s[i] === '*') {
        starStack.push(i);
      } else {
        if (stack.length > 0) {
          stack.pop();
        } else if (starStack.length > 0) {
          starStack.pop();
        } else {
          return false;
        }
      }
    }
  
    while (stack.length > 0 && starStack.length > 0) {
      if (stack[stack.length - 1] < starStack[starStack.length - 1]) {
        stack.pop();
        starStack.pop();
      } else {
        return false;
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage
  const s = "()";
  const result = checkValidString(s);
  console.log(result);
  // Output: true  