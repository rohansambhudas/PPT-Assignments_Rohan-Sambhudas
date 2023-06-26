// Question-3:

// Write a program to convert a binary tree to a doubly linked list.

// Input:

//         10

//        /   \

//      5     20

//            /   \

//         30     35

// Output:

// 5 10 30 20 35

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class DoublyLinkedListNode {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  function convertToDoublyLinkedList(root) {
    if (root === null) return null;
  
    let head = null;
    let prev = null;
  
    function inorder(node) {
      if (node === null) return;
  
      inorder(node.left);
  
      const doublyNode = new DoublyLinkedListNode(node.val);
  
      if (prev === null) {
        head = doublyNode;
      } else {
        prev.next = doublyNode;
        doublyNode.prev = prev;
      }
  
      prev = doublyNode;
  
      inorder(node.right);
    }
  
    inorder(root);
  
    return head;
  }
  
  // Example input binary tree
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(30);
  root.right.right = new TreeNode(35);
  
  // Convert binary tree to doubly linked list
  const head = convertToDoublyLinkedList(root);
  
  // Print the doubly linked list
  let current = head;
  let list = '';
  
  while (current !== null) {
    list += current.val + ' ';
    current = current.next;
  }
  
  console.log(list.trim());  