// **Question 7**

// Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
// For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

// Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function insertAlternate(head1, head2) {
    let current1 = head1;
    let current2 = head2;
  
    while (current1 && current2) {
      let temp1 = current1.next; // Store the next node of the first list
      let temp2 = current2.next; // Store the next node of the second list
  
      current1.next = current2; // Connect the current node of the first list to the current node of the second list
      current2.next = temp1; // Connect the current node of the second list to the stored next node of the first list
  
      current1 = temp1; // Move to the next node of the first list
      current2 = temp2; // Move to the next node of the second list
    }
  
    return head1;
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
  const list1 = new ListNode(5);
  list1.next = new ListNode(7);
  list1.next.next = new ListNode(17);
  list1.next.next.next = new ListNode(13);
  list1.next.next.next.next = new ListNode(11);
  
  const list2 = new ListNode(12);
  list2.next = new ListNode(10);
  list2.next.next = new ListNode(2);
  list2.next.next.next = new ListNode(4);
  list2.next.next.next.next = new ListNode(6);
  
  const modifiedList = insertAlternate(list1, list2);
  printList(modifiedList); // Output: 5->12->7->10->17->2->13->4->11->6
  printList(list2); // Output: empty list  