// Question-2

// A Given a binary tree, the task is to flip the binary tree towards the right direction that is clockwise. See the below examples to see the transformation.

// In the flip operation, the leftmost node becomes the root of the flipped tree and its parent becomes its right child and the right sibling becomes its left child and the same should be done for all left most nodes recursively.

// Example1:
// Input
//             1
//     2               3
// 4       5       6       7

// Output
//         4
//     5       2
//         3       1
//     6       7


// Example2:
// Input
//         1
//     2       3
//         4       5

// Output
//         2
//     3       1
// 4       5

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function flipBinaryTree(root) {
    if (root === null) return null;
  
    // Base case: leaf node
    if (root.left === null && root.right === null) return root;
  
    // Recursively flip the left and right subtrees
    const flippedLeft = flipBinaryTree(root.left);
    const flippedRight = flipBinaryTree(root.right);
  
    // Flip the current node
    root.left = flippedRight;
    root.right = flippedLeft;
  
    return root;
  }
  
  // Example input binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  // Flip the binary tree
  const flippedRoot = flipBinaryTree(root);
  
  // Print the flipped tree (preorder traversal)
  function printTree(node) {
    if (node === null) return;
  
    console.log(node.val);
    printTree(node.left);
    printTree(node.right);
  }
  
  printTree(flippedRoot);  