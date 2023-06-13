// **Question 1**

// Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

// **Example 1:**

// Input:
// LinkedList: 1->2->3->4->5
// Output:1 2 4 5

// Example 2:

// Input:
// LinkedList: 2->4->6->7->5->1
// Output:2 4 6 5 1

// Input:
// LinkedList: 2->4->6->7->5->1
// Output:2 4 6 5 1

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function deleteMiddleNode(head) {
    if (!head || !head.next) {
      // If the list is empty or has only one node
      return null;
    }
  
    let slow = head;
    let fast = head;
    let prev = null;
  
    while (fast && fast.next) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
  
    // Delete the middle node(s)
    prev.next = slow.next;
  
    return head;
  }
  
  // Helper function to print the linked list
  function printLinkedList(head) {
    let current = head;
    const values = [];
  
    while (current) {
      values.push(current.val);
      current = current.next;
    }
  
    console.log(values.join(" "));
  }
  
  // Example usage
  const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  console.log("Input: ");
  printLinkedList(list1);
  console.log("Output: ");
  printLinkedList(deleteMiddleNode(list1));
  
  const list2 = new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(7, new ListNode(5, new ListNode(1))))));
  console.log("Input: ");
  printLinkedList(list2);
  console.log("Output: ");
  printLinkedList(deleteMiddleNode(list2));      