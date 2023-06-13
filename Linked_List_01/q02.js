// **Question 2**

// Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

// **Example 1:**

// Input:
// N = 3
// value[] = {1,3,4}
// x(position at which tail is connected) = 2
// Output:True
// Explanation:In above test case N = 3.
// The linked list with nodes N = 3 is
// given. Then value of x=2 is given which
// means last node is connected with xth
// node of linked list. Therefore, there
// exists a loop.

// Example 2:

// Input:
// N = 4
// value[] = {1,8,3,4}
// x = 0
// Output:False
// Explanation:For N = 4 ,x = 0 means
// then lastNode->next = NULL, then
// the Linked list does not contains
// any loop.

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function hasLoop(head) {
    if (!head || !head.next) {
      // If the list is empty or has only one node, there can't be a loop
      return false;
    }
  
    let tortoise = head;
    let hare = head;
  
    while (hare && hare.next) {
      tortoise = tortoise.next;
      hare = hare.next.next;
  
      if (tortoise === hare) {
        // The tortoise and hare meet, indicating a loop
        return true;
      }
    }
  
    // If the loop is not found, the hare reaches the end of the list
    return false;
  }
  
  // Example usage
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(3);
  list1.next.next.next = list1.next; // Creating a loop
  
  console.log(hasLoop(list1)); // Output: true
  
  const list2 = new ListNode(1);
  list2.next = new ListNode(2);
  list2.next.next = new ListNode(3);
  
  console.log(hasLoop(list2)); // Output: false  