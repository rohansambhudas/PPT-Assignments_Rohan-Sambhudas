// **Question 5**

// Given a number , write a program to reverse this number using stack.

// **Examples:**

// Input : 365
// Output : 563

// Input : 6899
// Output : 9986

function reverseNumber(number) {
    const stack = [];
  
    // Convert number to string and push each digit to stack
    const digits = number.toString().split("");
    digits.forEach((digit) => stack.push(digit));
  
    let reversedNumber = "";
  
    // Pop digits from stack and concatenate to form reversed number
    while (stack.length > 0) {
      reversedNumber += stack.pop();
    }
  
    return parseInt(reversedNumber);
  }
  
  // Example usage
  const number1 = 365;
  console.log(reverseNumber(number1)); // Output: 563
  
  const number2 = 6899;
  console.log(reverseNumber(number2)); // Output: 9986  