// **Question 8**

// Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

// **Example 1:**

// Input:
// LinkedList = 1 <--> 3 <--> 4
// x = 3
// Output:1 3
// Explanation:After deleting the node at
// position 3 (position starts from 1),
// the linked list will be now as 1->3.

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
  
    deleteNode(position) {
      if (!this.head) {
        // If the list is empty, nothing to delete
        return;
      }
  
      let current = this.head;
      let count = 1;
  
      // Traverse to the given position
      while (current && count < position) {
        current = current.next;
        count++;
      }
  
      if (!current) {
        // If the position is out of bounds
        return;
      }
  
      if (current === this.head) {
        // If the node to be deleted is the head node
        this.head = current.next;
        if (this.head) {
          this.head.prev = null;
        }
      } else {
        current.prev.next = current.next;
        if (current.next) {
          current.next.prev = current.prev;
        }
      }
  
      // Delete the current node
      current = null;
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
  doublyLinkedList.push(1);
  doublyLinkedList.push(3);
  doublyLinkedList.push(4);
  
  console.log("Original Doubly Linked List:");
  doublyLinkedList.printList(); // Output: Linked List: 4 3 1
  
  doublyLinkedList.deleteNode(3);
  
  console.log("Doubly Linked List after deletion:");
  doublyLinkedList.printList(); // Output: Linked List: 1 3  