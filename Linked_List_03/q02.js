// **Question 2**

// A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

// **Example 1:**

// Input:
// LinkedList: 4->5->6
// Output:457

// Example 2:

// Input:
// LinkedList: 1->2->3
// Output:124

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
  
    // Function to add 1 to the linked list
    addOne() {
      let dummy = new Node(0);
      dummy.next = this.head;
      let lastNonNine = dummy;
      let current = this.head;
  
      // Find the rightmost non-nine node
      while (current) {
        if (current.value !== 9) {
          lastNonNine = current;
        }
        current = current.next;
      }
  
      // Add 1 to the rightmost non-nine node
      lastNonNine.value += 1;
  
      // Set all the subsequent nodes to 0
      current = lastNonNine.next;
      while (current) {
        current.value = 0;
        current = current.next;
      }
  
      // If the dummy node is not needed, remove it
      if (dummy.value === 0) {
        this.head = dummy.next;
      } else {
        this.head = dummy;
      }
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
        result += current.value;
        current = current.next;
      }
      console.log(result);
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.insert(4);
  linkedList.insert(5);
  linkedList.insert(6);
  
  console.log("Original Linked List:");
  linkedList.printList(); // Output: 4 5 6
  
  linkedList.addOne();
  
  console.log("Linked List after adding 1:");
  linkedList.printList(); // Output: 4 5 7  