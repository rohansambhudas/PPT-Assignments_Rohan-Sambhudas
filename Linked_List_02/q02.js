// **Question 2**

// Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

// For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

// **Example 1:**

// Input:
// LinkedList: 
// 11->11->11->21->43->43->60
// Output:
// 11->21->43->60

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function removeDuplicates(head) {
    if (!head) {
      // If the list is empty, return null
      return null;
    }
  
    let current = head;
  
    while (current && current.next) {
      if (current.val === current.next.val) {
        // If duplicates exist, skip the next node
        current.next = current.next.next;
      } else {
        // Move to the next node
        current = current.next;
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
  const head = new ListNode(11);
  head.next = new ListNode(11);
  head.next.next = new ListNode(11);
  head.next.next.next = new ListNode(21);
  head.next.next.next.next = new ListNode(43);
  head.next.next.next.next.next = new ListNode(43);
  head.next.next.next.next.next.next = new ListNode(60);
  
  const updatedList = removeDuplicates(head);
  
  printList(updatedList); // Output: 11 -> 21 -> 43 -> 60 -> null