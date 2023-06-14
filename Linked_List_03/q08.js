// **Question 8**

// Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.

// (Note that in the examples below, all sequences are serializations of `ListNode` objects.)

// **Example 1:**

// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.

// Example 2:

// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]

// Example 3:

// Input: head = [1,2,3,-3,-2]
// Output: [1]

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function deleteZeroSumSublists(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let sum = 0;
    const sumMap = new Map();
    let curr = dummy;
  
    while (curr) {
      sum += curr.val;
  
      if (sumMap.has(sum)) {
        curr = sumMap.get(sum).next;
        let tempSum = sum + curr.val;
  
        while (tempSum !== sum) {
          sumMap.delete(tempSum);
          curr = curr.next;
          tempSum += curr.val;
        }
  
        sumMap.get(sum).next = curr.next;
      } else {
        sumMap.set(sum, curr);
      }
  
      curr = curr.next;
    }
  
    return dummy.next;
  }
  
  // Example usage
  const head1 = new ListNode(1);
  head1.next = new ListNode(2);
  head1.next.next = new ListNode(-3);
  head1.next.next.next = new ListNode(3);
  head1.next.next.next.next = new ListNode(1);
  
  console.log(deleteZeroSumSublists(head1)); // Output: [3, 1]
  
  const head2 = new ListNode(1);
  head2.next = new ListNode(2);
  head2.next.next = new ListNode(3);
  head2.next.next.next = new ListNode(-3);
  head2.next.next.next.next = new ListNode(4);
  
  console.log(deleteZeroSumSublists(head2)); // Output: [1, 2, 4]
  
  const head3 = new ListNode(1);
  head3.next = new ListNode(2);
  head3.next.next = new ListNode(3);
  head3.next.next.next = new ListNode(-3);
  head3.next.next.next.next = new ListNode(-2);
  
  console.log(deleteZeroSumSublists(head3)); // Output: [1]  