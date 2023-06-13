// **Question 1**

// Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

// **Examples:**

// Input: list1 = 5->2->3->8
// list2 = 1->7->4->5
// Output: New list = 5->7->4->8

// Input:list1 = 2->8->9->3
// list2 = 5->3->6->4
// Output: New list = 5->8->9->4

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function createNewList(list1, list2) {
    if (!list1 || !list2) {
      // If either list is empty, return null
      return null;
    }
  
    let head = null;
    let tail = null;
  
    let curr1 = list1;
    let curr2 = list2;
  
    while (curr1 && curr2) {
      let greaterVal = Math.max(curr1.val, curr2.val);
  
      // Create a new node with the greater value
      let newNode = new ListNode(greaterVal);
  
      if (!head) {
        // If it's the first node, set it as head
        head = newNode;
        tail = newNode;
      } else {
        // Add the new node to the tail of the new list
        tail.next = newNode;
        tail = newNode;
      }
  
      // Move to the next nodes in both lists
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
  
    return head;
  }
  
  // Example usage
  const list1 = new ListNode(5);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(3);
  list1.next.next.next = new ListNode(8);
  
  const list2 = new ListNode(1);
  list2.next = new ListNode(7);
  list2.next.next = new ListNode(4);
  list2.next.next.next = new ListNode(5);
  
  const newList = createNewList(list1, list2);
  
  // Function to print the linked list
  function printList(list) {
    let curr = list;
    let result = "";
    while (curr) {
      result += curr.val + " -> ";
      curr = curr.next;
    }
    result += "null";
    console.log(result);
  }
  
  printList(newList); // Output: 5 -> 7 -> 4 -> 8 -> null    