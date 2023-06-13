// **Question 6**

// Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

// **Examples:**

// Input: a: 5->10->15, b: 2->3->20

// Output: 2->3->5->10->15->20

// Input: a: 1->1, b: 2->4

// Output: 1->1->2->4

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function mergeSortedLists(headA, headB) {
    if (!headA) {
      // If list A is empty, return list B
      return headB;
    }
  
    if (!headB) {
      // If list B is empty, return list A
      return headA;
    }
  
    let mergedHead = null;
    let mergedTail = null;
  
    if (headA.val <= headB.val) {
      // Set the merged head and tail to the smaller value
      mergedHead = headA;
      mergedTail = headA;
      headA = headA.next;
    } else {
      mergedHead = headB;
      mergedTail = headB;
      headB = headB.next;
    }
  
    // Merge the lists until one of them becomes empty
    while (headA && headB) {
      if (headA.val <= headB.val) {
        mergedTail.next = headA;
        mergedTail = headA;
        headA = headA.next;
      } else {
        mergedTail.next = headB;
        mergedTail = headB;
        headB = headB.next;
      }
    }
  
    // Append the remaining nodes of list A or list B
    if (headA) {
      mergedTail.next = headA;
    } else {
      mergedTail.next = headB;
    }
  
    return mergedHead;
  }
  
  // Function to print the linked list
  function printList(head) {
    let current = head;
    let result = "";
    while (current) {
      result += current.val + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
  
  // Example usage
  const listA = new ListNode(5);
  listA.next = new ListNode(10);
  listA.next.next = new ListNode(15);
  
  const listB = new ListNode(2);
  listB.next = new ListNode(3);
  listB.next.next = new ListNode(20);
  
  const mergedList = mergeSortedLists(listA, listB);
  
  printList(mergedList); // Output: 2 -> 3 -> 5 -> 10 -> 15 -> 20 -> null  