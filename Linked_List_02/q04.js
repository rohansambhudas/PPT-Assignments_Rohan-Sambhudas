// **Question 4**

// Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

// **Example:**

// Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
// Output:   3->2->1->4->5->6->9->8->7->NULL.

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function reverseAlternateKNodes(head, k) {
    if (!head || k <= 1) {
      // If the list is empty or k is invalid, return the head
      return head;
    }
  
    let current = head;
    let prev = null;
    let next = null;
    let count = 0;
    let shouldReverse = true;
  
    // Reverse alternate k nodes
    while (current && count < k) {
      next = current.next;
  
      if (shouldReverse) {
        current.next = prev;
        prev = current;
      } else {
        prev = current;
      }
  
      current = next;
      count++;
  
      if (count === k) {
        if (shouldReverse) {
          // Connect the last node of the reversed group to the next node in the list
          head.next = reverseAlternateKNodes(current, k);
        } else {
          // Connect the last node of the non-reversed group to the next reversed group
          prev.next = reverseAlternateKNodes(current, k);
        }
      }
    }
  
    if (shouldReverse) {
      return prev;
    } else {
      return head;
    }
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
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next = new ListNode(6);
  head.next.next.next.next.next.next = new ListNode(7);
  head.next.next.next.next.next.next.next = new ListNode(8);
  head.next.next.next.next.next.next.next.next = new ListNode(9);
  
  const k = 3;
  
  const updatedList = reverseAlternateKNodes(head, k);
  
  printList(updatedList); // Output: 3 -> 2 -> 1 -> 4 -> 5 -> 6 -> 9 -> 8 -> 7 -> null  