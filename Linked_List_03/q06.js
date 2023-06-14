// **Question 6**

// Given a singly linked list of size **N**. The task is to **left-shift** the linked list by **k** nodes, where **k** is a given positive integer smaller than or equal to length of the linked list.

// **Example 1:**

// Input:
// N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output:8 9 2 4 7
// Explanation:Rotate 1:4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

// Example 2:

// Input:
// N = 8
// value[] = {1, 2, 3, 4, 5, 6, 7, 8}
// k = 4
// Output:5 6 7 8 1 2 3 4

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function leftShiftLinkedList(head, k) {
    if (!head || k === 0) {
      return head;
    }
  
    let current = head;
    let count = 1;
  
    // Find the kth node from the beginning
    while (count < k && current) {
      current = current.next;
      count++;
    }
  
    // If k is greater than the length of the linked list, no rotation is needed
    if (!current) {
      return head;
    }
  
    let kthNode = current;
  
    // Traverse to the end of the original list
    while (current.next) {
      current = current.next;
    }
  
    // Attach the sublist starting from the kth node at the end of the original list
    current.next = head;
    head = kthNode.next;
    kthNode.next = null;
  
    return head;
  }
  
  // Example usage
  const head1 = new Node(2);
  head1.next = new Node(4);
  head1.next.next = new Node(7);
  head1.next.next.next = new Node(8);
  head1.next.next.next.next = new Node(9);
  
  console.log("Original List:");
  printList(head1);
  
  const shiftedHead1 = leftShiftLinkedList(head1, 3);
  
  console.log("Shifted List:");
  printList(shiftedHead1);
  
  const head2 = new Node(1);
  head2.next = new Node(2);
  head2.next.next = new Node(3);
  head2.next.next.next = new Node(4);
  head2.next.next.next.next = new Node(5);
  head2.next.next.next.next.next = new Node(6);
  head2.next.next.next.next.next.next = new Node(7);
  head2.next.next.next.next.next.next.next = new Node(8);
  
  console.log("Original List:");
  printList(head2);
  
  const shiftedHead2 = leftShiftLinkedList(head2, 4);
  
  console.log("Shifted List:");
  printList(shiftedHead2);
  
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