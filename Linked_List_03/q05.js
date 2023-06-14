// **Question 5**

// Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.

// The **first** node is considered **odd**, and the **second** node is **even**, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

// **Example 1:**

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Example 2:

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function oddEvenList(head) {
    if (!head || !head.next) {
      return head;
    }
  
    let oddHead = head;
    let oddTail = oddHead;
    let evenHead = head.next;
    let evenTail = evenHead;
  
    while (evenTail && evenTail.next) {
      oddTail.next = evenTail.next;
      oddTail = oddTail.next;
      evenTail.next = oddTail.next;
      evenTail = evenTail.next;
    }
  
    oddTail.next = evenHead;
  
    return oddHead;
  }
  
  // Example usage
  const head1 = new Node(1);
  head1.next = new Node(2);
  head1.next.next = new Node(3);
  head1.next.next.next = new Node(4);
  head1.next.next.next.next = new Node(5);
  
  console.log("Original List:");
  printList(head1);
  
  const reorderedHead1 = oddEvenList(head1);
  
  console.log("Reordered List:");
  printList(reorderedHead1);
  
  const head2 = new Node(2);
  head2.next = new Node(1);
  head2.next.next = new Node(3);
  head2.next.next.next = new Node(5);
  head2.next.next.next.next = new Node(6);
  head2.next.next.next.next.next = new Node(4);
  head2.next.next.next.next.next.next = new Node(7);
  
  console.log("Original List:");
  printList(head2);
  
  const reorderedHead2 = oddEvenList(head2);
  
  console.log("Reordered List:");
  printList(reorderedHead2);
  
  // Function to print the linked list
  function printList(head) {
    let curr = head;
    const result = [];
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    console.log(result);
  }  