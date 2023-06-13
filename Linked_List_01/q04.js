// **Question 4**

// Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

// Examples:

// Input: R->A->D->A->R->NULL
// **Output:** Yes
// **Input:** C->O->D->E->NULL
// **Output:** No

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) {
      return true; // Empty or single-node linked list is a palindrome
    }
  
    let slow = head;
    let fast = head;
  
    // Find the middle node using slow and fast pointers
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half of the linked list
    let prev = null;
    let curr = slow;
  
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  
    // Compare the reversed second half with the first half
    let firstHalf = head;
    let secondHalf = prev;
  
    while (secondHalf) {
      if (firstHalf.val !== secondHalf.val) {
        return false; // Characters don't match, not a palindrome
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  
    return true; // Palindrome
  }
  
  // Example usage
  const list1 = new ListNode('R');
  list1.next = new ListNode('A');
  list1.next.next = new ListNode('D');
  list1.next.next.next = new ListNode('A');
  list1.next.next.next.next = new ListNode('R');
  
  console.log(isPalindrome(list1)); // Output: true
  
  const list2 = new ListNode('C');
  list2.next = new ListNode('O');
  list2.next.next = new ListNode('D');
  list2.next.next.next = new ListNode('E');
  
  console.log(isPalindrome(list2)); // Output: false  