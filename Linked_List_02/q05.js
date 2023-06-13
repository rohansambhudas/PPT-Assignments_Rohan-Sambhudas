// **Question 5**

// Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

// **Examples**:

// Input:   1->2->3->5->2->10, key = 2
// Output:  1->2->3->5->10

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function deleteLastOccurrence(head, key) {
    if (!head) {
      // If the list is empty, return null
      return null;
    }
  
    let prev = null;
    let lastOccurrence = null;
    let current = head;
  
    // Find the last occurrence of the key
    while (current) {
      if (current.val === key) {
        lastOccurrence = current;
      }
      current = current.next;
    }
  
    current = head;
  
    // Traverse the list again to update references
    while (current && current !== lastOccurrence) {
      prev = current;
      current = current.next;
    }
  
    if (lastOccurrence) {
      if (prev) {
        // If the last occurrence is not the first node
        prev.next = lastOccurrence.next;
      } else {
        // If the last occurrence is the first node
        head = lastOccurrence.next;
      }
    }
  
    return head;
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
  head.next.next.next = new ListNode(5);
  head.next.next.next.next = new ListNode(2);
  head.next.next.next.next.next = new ListNode(10);
  
  const key = 2;
  
  const updatedList = deleteLastOccurrence(head, key);
  
  printList(updatedList); // Output: 1 -> 2 -> 3 -> 5 -> 10 -> null  