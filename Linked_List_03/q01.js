// **Question 1**

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

// Example 2:

// Input:
// N = 4
// value[] = {1,8,3,4}
// X = 0
// Output:1
// Explanation:The Linked list does not
// contains any loop.

// Example 3:

// Input:
// N = 4
// value[] = {1,2,3,4}
// X = 1
// Output:1
// Explanation:The link list looks like
// 1 -> 2 -> 3 -> 4
// ^              |
// |______________|
// A loop is present.
// If you remove it successfully,
// the answer will be 1.

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Function to detect and remove a loop in the linked list
    removeLoop() {
      let slow = this.head;
      let fast = this.head;
  
      // Detect the loop using Floyd's Cycle Detection Algorithm
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
  
        // If a loop is found, break the loop
        if (slow === fast) {
          break;
        }
      }
  
      // If no loop is found, return
      if (slow !== fast) {
        return;
      }
  
      // Find the last node of the loop
      let prev = null;
      while (slow !== fast) {
        prev = fast;
        slow = slow.next;
        fast = fast.next;
      }
  
      // Unlink the last node that forms the loop
      prev.next = null;
    }
  
    // Function to insert a node at the end of the linked list
    insert(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Function to print the linked list
    printList() {
      let current = this.head;
      let result = "";
      while (current) {
        result += current.value + " ";
        current = current.next;
      }
      console.log(result);
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(3);
  linkedList.insert(4);
  
  // Create a loop for testing
  linkedList.head.next.next.next = linkedList.head.next;
  
  console.log("Original Linked List:");
  linkedList.printList(); // Output: 1 3 4
  
  linkedList.removeLoop();
  
  console.log("Linked List after removing loop:");
  linkedList.printList(); // Output: 1 3 4    