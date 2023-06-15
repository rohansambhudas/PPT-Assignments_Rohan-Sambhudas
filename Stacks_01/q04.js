// **Question 4**

// You are given a stack **St**. You have to reverse the stack using recursion.

// **Example 1:**

// Input:St = {3,2,1,7,6}
// Output:{6,7,1,2,3}

// Example 2:

// Input:St = {4,3,9,6}
// Output:{6,9,3,4}

function reverseStack(St) {
    if (St.length <= 1) {
      return;
    }
  
    const topElement = St.pop();
  
    reverseStack(St);
  
    insertAtBottom(St, topElement);
  }
  
  function insertAtBottom(St, element) {
    if (St.length === 0) {
      St.push(element);
      return;
    }
  
    const top = St.pop();
    insertAtBottom(St, element);
    St.push(top);
  }
  
  // Example usage
  const stack = [3, 2, 1, 7, 6];
  reverseStack(stack);
  console.log(stack); // Output: [6, 7, 1, 2, 3]
  
  const stack2 = [4, 3, 9, 6];
  reverseStack(stack2);
  console.log(stack2); // Output: [6, 9, 3, 4]  