// Question-1:

// Given a Binary Tree (Bt), convert it to a Doubly Linked List(DLL). The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as in Inorder for the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

// Example:

//          10
//     12         15
// 25      30   36

// The above tree should be in place converted to following Doubly Linked List (DLL).

// 25 <=> 12 <=> 30 <=> 10 <=> 36 <=> 16

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function convertToDLL(root) {
    if (root === null) return null;
  
    let prev = null;
    let head = null;
  
    function convert(node) {
      if (node === null) return;
  
      // Convert left subtree
      convert(node.left);
  
      // Update pointers
      if (prev === null) {
        // If prev is null, this is the leftmost node (head of DLL)
        head = node;
      } else {
        // Link the current node with the previous node
        node.left = prev;
        prev.right = node;
      }
  
      prev = node;
  
      // Convert right subtree
      convert(node.right);
    }
  
    // Start the conversion
    convert(root);
  
    // Update the pointers to form a circular DLL
    head.left = prev;
    prev.right = head;
  
    return head;
  }
  
  // Example input binary tree
  const root = new TreeNode(10);
  root.left = new TreeNode(12);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(25);
  root.left.right = new TreeNode(30);
  root.right.right = new TreeNode(36);
  
  // Convert the binary tree to DLL
  const head = convertToDLL(root);
  
  // Traverse and print the DLL
  let current = head;
  let list = '';
  do {
    list += current.val;
    if (current.right) {
      list += ' <=> ';
    }
    current = current.right;
  } while (current !== head);
  
  console.log(list);  