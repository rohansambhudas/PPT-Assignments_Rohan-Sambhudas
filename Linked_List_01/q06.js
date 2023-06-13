// **Question 6**

// Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

// Difficulty Level: Rookie

// **Examples**:

// Input:
// M = 2, N = 2
// Linked List: 1->2->3->4->5->6->7->8
// Output:
// Linked List: 1->2->5->6

// Input:
// M = 3, N = 2
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->2->3->6->7->8

// Input:
// M = 1, N = 1
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->3->5->7->9

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function deleteNodes(head, M, N) {
    let current = head;
  
    while (current) {
      // Retain M nodes
      for (let i = 1; i < M && current; i++) {
        current = current.next;
      }
  
      if (!current) {
        break;
      }
  
      let temp = current.next;
  
      // Delete N nodes
      for (let i = 0; i < N && temp; i++) {
        temp = temp.next;
      }
  
      current.next = temp; // Connect the retained nodes with the next nodes
  
      current = temp; // Move to the next starting node
    }
  
    return head;
  }
  
  // Function to print the linked list
  function printList(head) {
    let current = head;
    const values = [];
  
    while (current) {
      values.push(current.val);
      current = current.next;
    }
  
    console.log(values.join("->"));
  }
  
  // Example usage
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(4);
  list.next.next.next.next = new ListNode(5);
  list.next.next.next.next.next = new ListNode(6);
  list.next.next.next.next.next.next = new ListNode(7);
  list.next.next.next.next.next.next.next = new ListNode(8);
  
  const M = 2;
  const N = 2;
  
  const modifiedList = deleteNodes(list, M, N);
  printList(modifiedList); // Output: 1->2->5->6  