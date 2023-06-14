// **Question 7**

// You are given the `head` of a linked list with `n` nodes.

// For each node in the list, find the value of the **next greater node**. That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.

// Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `ith` node (**1-indexed**). If the `ith` node does not have a next greater node, set `answer[i] = 0`.

// **Example 1:**

// Input: head = [2,1,5]
// Output: [5,5,0]

// Example 2:

// Input: head = [2,7,4,3,5]
// Output: [7,0,5,5,0]

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function nextLargerNodes(head) {
    const values = [];
    let curr = head;
  
    // Convert the linked list into an array
    while (curr) {
      values.push(curr.val);
      curr = curr.next;
    }
  
    const result = new Array(values.length).fill(0);
    const stack = [];
  
    for (let i = values.length - 1; i >= 0; i--) {
      while (stack.length && values[i] >= values[stack[stack.length - 1]]) {
        stack.pop();
      }
  
      if (stack.length) {
        result[i] = values[stack[stack.length - 1]];
      }
  
      stack.push(i);
    }
  
    return result;
  }
  
  // Example usage
  const head1 = new ListNode(2);
  head1.next = new ListNode(1);
  head1.next.next = new ListNode(5);
  
  console.log(nextLargerNodes(head1)); // Output: [5, 5, 0]
  
  const head2 = new ListNode(2);
  head2.next = new ListNode(7);
  head2.next.next = new ListNode(4);
  head2.next.next.next = new ListNode(3);
  head2.next.next.next.next = new ListNode(5);
  
  console.log(nextLargerNodes(head2)); // Output: [7, 0, 5, 5, 0]  