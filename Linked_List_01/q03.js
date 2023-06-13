// **Question 3**

// Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

// **Example 1:**

// Input:
// N = 2
// LinkedList: 1->2->3->4->5->6->7->8->9
// Output:8
// Explanation:In the first example, there
// are 9 nodes in linked list and we need
// to find 2nd node from end. 2nd node
// from end is 8.

// Example 2:

// Input:
// N = 5
// LinkedList: 10->5->100->5
// Output:-1
// Explanation:In the second example, there
// are 4 nodes in the linked list and we
// need to find 5th from the end. Since 'n'
// is more than the number of nodes in the
// linked list, the output is -1.

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function findNthFromEnd(head, n) {
    if (!head) {
      return -1; // Empty linked list
    }
  
    let first = head;
    let second = head;
  
    // Move the first pointer N nodes ahead
    for (let i = 0; i < n; i++) {
      if (first === null) {
        return -1; // Linked list has less than N nodes
      }
      first = first.next;
    }
  
    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
      first = first.next;
      second = second.next;
    }
  
    return second !== null ? second.val : -1;
  }
  
  // Example usage
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(4);
  list.next.next.next.next = new ListNode(5);
  
  console.log(findNthFromEnd(list, 2)); // Output: 4
  console.log(findNthFromEnd(list, 5)); // Output: 1
  console.log(findNthFromEnd(list, 6)); // Output: -1  