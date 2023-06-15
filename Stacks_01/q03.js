// **Question 3**

// Implement a Stack using two queues **q1** and **q2**.

// **Example 1:**

// Input:
// push(2)
// push(3)
// pop()
// push(4)
// pop()
// Output:3 4
// Explanation:
// push(2) the stack will be {2}
// push(3) the stack will be {2 3}
// pop()   poped element will be 3 the
//         stack will be {2}
// push(4) the stack will be {2 4}
// pop()   poped element will be 4

// Example 2:

// Input:
// push(2)
// pop()
// pop()
// push(3)
// Output:2 -1

class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    push(element) {
      this.q1.push(element);
    }
  
    pop() {
      if (this.q1.length === 0) {
        return -1; // Stack is empty
      }
  
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
  
      const poppedElement = this.q1.shift();
      [this.q1, this.q2] = [this.q2, this.q1]; // Swap q1 and q2
      return poppedElement;
    }
  
    top() {
      if (this.q1.length === 0) {
        return -1; // Stack is empty
      }
  
      let topElement;
  
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
  
      topElement = this.q1[0];
      this.q2.push(this.q1.shift());
      [this.q1, this.q2] = [this.q2, this.q1]; // Swap q1 and q2
      return topElement;
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // Output: 3
  stack.push(4);
  console.log(stack.pop()); // Output: 4
  
  const stack2 = new Stack();
  stack2.push(2);
  console.log(stack2.pop()); // Output: 2
  console.log(stack2.pop()); // Output: -1
  stack2.push(3);
  console.log(stack2.top()); // Output: 3  