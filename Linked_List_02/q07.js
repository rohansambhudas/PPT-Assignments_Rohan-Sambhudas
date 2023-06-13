// **Question 7**

// Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

// **Example:**

// Original Linked list 10 8 4 2
// Reversed Linked list 2 4 8 10

class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
    }
  
    reverse() {
      if (!this.head || !this.head.next) {
        // If the list is empty or has only one node, no need to reverse
        return;
      }
  
      let current = this.head;
      let temp = null;
  
      // Swap next and prev pointers for all nodes
      while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }
  
      // Update the head pointer to the last node
      if (temp) {
        this.head = temp.prev;
      }
    }
  
    push(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    }
  
    printList() {
      let current = this.head;
      let result = "";
      while (current) {
        result += current.data + " ";
        current = current.next;
      }
      console.log("Linked List:", result);
    }
  }
  
  // Example usage
  const doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.push(2);
  doublyLinkedList.push(4);
  doublyLinkedList.push(8);
  doublyLinkedList.push(10);
  
  console.log("Original Doubly Linked List:");
  doublyLinkedList.printList(); // Output: Linked List: 10 8 4 2
  
  doublyLinkedList.reverse();
  
  console.log("Reversed Doubly Linked List:");
  doublyLinkedList.printList(); // Output: Linked List: 2 4 8 10  