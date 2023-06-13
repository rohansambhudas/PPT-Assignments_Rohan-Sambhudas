// **Question 3**

// Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

// **Example 1:**

// Input:
// LinkedList: 1->2->2->4->5->6->7->8
// K = 4
// Output:4 2 2 1 8 7 6 5
// Explanation:
// The first 4 elements 1,2,2,4 are reversed first
// and then the next 4 elements 5,6,7,8. Hence, the
// resultant linked list is 4->2->2->1->8->7->6->5.

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function reverseKNodes(head, k) {
    if (!head || k === 0 || k === 1) {
      // If the list is empty or k is invalid, return the head
      return head;
    }
  
    let current = head;
    let prev = null;
    let next = null;
    let count = 0;
  
    // Reverse the first k nodes
    while (current && count < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
  
    // Recursively reverse the remaining nodes
    if (next) {
      head.next = reverseKNodes(next, k);
    }
  
    return prev;
  }
  
  // Function to print the linked list
  function printList(head) {
    let current = head;
    let result = "";
    while (current) {
      result += current.val + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
  
  // Example usage
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next = new ListNode(6);
  head.next.next.next.next.next.next = new ListNode(7);
  head.next.next.next.next.next.next.next = new ListNode(8);
  
  const k = 4;
  
  const updatedList = reverseKNodes(head, k);
  
  printList(updatedList); // Output: 4 -> 2 -> 2 -> 1 -> 8 -> 7 -> 6 -> 5 -> null  