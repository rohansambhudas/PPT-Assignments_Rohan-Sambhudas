// **Question 5**

// Given a linked list of **N** nodes such that it may contain a loop.

// A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

// Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

// **Example 1:**

// Input:
// N = 3
// value[] = {1,3,4}
// X = 2
// Output:1
// Explanation:The link list looks like
// 1 -> 3 -> 4
//      ^    |
//      |____|
// A loop is present. If you remove it
// successfully, the answer will be 1.

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function detectAndRemoveLoop(head) {
    let slow = head;
    let fast = head;
  
    // Detect the loop using Floyd's cycle detection algorithm
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        break; // Loop detected
      }
    }
  
    // If no loop is present, return
    if (!fast || !fast.next) {
      return;
    }
  
    // Find the length of the loop
    let loopLength = 1;
    slow = slow.next;
  
    while (slow !== fast) {
      slow = slow.next;
      loopLength++;
    }
  
    // Find the starting point of the loop
    let ptr1 = head;
    let ptr2 = head;
  
    for (let i = 0; i < loopLength; i++) {
      ptr2 = ptr2.next;
    }
  
    while (ptr1 !== ptr2) {
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    }
  
    // Remove the loop by breaking the connection
    while (ptr2.next !== ptr1) {
      ptr2 = ptr2.next;
    }
  
    ptr2.next = null; // Break the connection
  
    return head;
  }
  
  // Example usage
  const list = new ListNode(1);
  list.next = new ListNode(3);
  list.next.next = new ListNode(4);
  list.next.next.next = list.next; // Creating a loop
  
  const newList = detectAndRemoveLoop(list);
  console.log(newList); // Output: 1 -> 3 -> 4 (loop removed)  

