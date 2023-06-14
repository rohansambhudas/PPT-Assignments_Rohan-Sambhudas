// **Question 3**

// Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

// **Example 1:**

// Input:
// 5 -> 10 -> 19 -> 28
// |     |     |     |
// 7     20    22   35
// |           |     |
// 8          50    40
// |                 |
// 30               45
// Output: 5-> 7-> 8- > 10 -> 19-> 20->
// 22-> 28-> 30-> 35-> 40-> 45-> 50.
// Explanation:
// The resultant linked lists has every
// node in a single level.(Note:| represents the bottom pointer.)

// Example 2:

// Input:
// 5 -> 10 -> 19 -> 28
// |          |
// 7          22
// |          |
// 8          50
// |
// 30
// Output: 5->7->8->10->19->22->28->30->50
// Explanation:
// The resultant linked lists has every
// node in a single level.

// (Note:| represents the bottom pointer.)

class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
      this.bottom = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Function to merge two sorted linked lists
    mergeLists(list1, list2) {
      if (!list1) return list2;
      if (!list2) return list1;
  
      let result = null;
  
      if (list1.data <= list2.data) {
        result = list1;
        result.bottom = this.mergeLists(list1.bottom, list2);
      } else {
        result = list2;
        result.bottom = this.mergeLists(list1, list2.bottom);
      }
  
      result.next = null;
      return result;
    }
  
    // Function to flatten the linked list
    flattenList(node) {
      if (!node || !node.next) {
        return node;
      }
  
      node.next = this.flattenList(node.next);
  
      node = this.mergeLists(node, node.next);
  
      return node;
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
  
    // Function to insert a node at the bottom of a sub-linked list
    insertBottom(node, value) {
      const newNode = new Node(value);
      if (!node) {
        return newNode;
      }
      node.bottom = this.insertBottom(node.bottom, value);
      return node;
    }
  
    // Function to print the flattened linked list
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.bottom;
      }
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.insert(5);
  linkedList.insert(10);
  linkedList.insert(19);
  linkedList.insert(28);
  linkedList.insertBottom(linkedList.head, 7);
  linkedList.insertBottom(linkedList.head, 20);
  linkedList.insertBottom(linkedList.head, 22);
  linkedList.insertBottom(linkedList.head, 35);
  linkedList.insertBottom(linkedList.head.next, 8);
  linkedList.insertBottom(linkedList.head.next, 50);
  linkedList.insertBottom(linkedList.head.next.next, 30);
  linkedList.insertBottom(linkedList.head.next.next.next, 45);
  
  console.log("Original Linked List:");
  linkedList.printList();
  console.log("Flattened Linked List:");
  linkedList.flattenList(linkedList.head);
  linkedList.printList();  