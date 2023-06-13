// **Question 8**

// Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.
// A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isCircular(head) {
    if (!head || !head.next) {
      // If the linked list is empty or has only one node, it can't be circular
      return false;
    }
  
    let slow = head;
    let fast = head.next;
  
    while (fast && fast.next) {
      if (slow === fast) {
        // If slow and fast pointers meet, the linked list is circular
        return true;
      }
  
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // If the fast pointer reaches the end of the linked list, it's not circular
    return false;
  }
  
  // Example usage
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(4);
  list.next.next.next.next = list.next; // Creating a circular linked list
  
  console.log(isCircular(list)); // Output: true  