// **Question 6**

// Given string **S** representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like ***, /, + and -**.

// **Example 1:**

// Input: S = "231*+9-"
// Output: -4
// Explanation:
// After solving the given expression,
// we have -4 as result.

// Example 2:

// Input: S = "123+*8-"
// Output: -3
// Explanation:
// After solving the given postfix
// expression, we have -3 as result.

function evaluatePostfixExpression(S) {
    const stack = [];
  
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
  
      if (isOperand(char)) {
        stack.push(Number(char)); // Push operands as numbers
      } else {
        // Pop top two elements from stack
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        // Perform operation based on operator
        let result;
        switch (char) {
          case '+':
            result = operand1 + operand2;
            break;
          case '-':
            result = operand1 - operand2;
            break;
          case '*':
            result = operand1 * operand2;
            break;
          case '/':
            result = operand1 / operand2;
            break;
        }
  
        stack.push(result); // Push the result back onto the stack
      }
    }
  
    return stack.pop(); // Final result will be the top element of the stack
  }
  
  // Helper function to check if a character is an operand
  function isOperand(char) {
    return !isNaN(char); // Use isNaN to check if the character is a number
  }
  
  // Example usage
  const S = "231*+9-";
  const result = evaluatePostfixExpression(S);
  console.log(result); // Output: -4  