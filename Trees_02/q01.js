// Question-1

// You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.

// Input:

//         10

//        /   \

//      2      7

//    /   \

//  8      4

// Output:

//         8

//       /   \

//     4     10

//   /   \

// 2      7

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function inorderTraversal(root, values) {
    if (root === null) return;
  
    inorderTraversal(root.left, values);
    values.push(root.val);
    inorderTraversal(root.right, values);
  }
  
  function convertToBST(root, values) {
    if (root === null) return;
  
    convertToBST(root.left, values);
    root.val = values.shift();
    convertToBST(root.right, values);
  }
  
  function convertBinaryTreeToBST(root) {
    // Step 1: Perform inorder traversal to retrieve values
    const values = [];
    inorderTraversal(root, values);
  
    // Step 2: Sort the obtained values
    values.sort((a, b) => a - b);
  
    // Step 3: Replace values in the binary tree with sorted values
    convertToBST(root, values);
  
    return root;
  }
  
  // Example input binary tree
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(8);
  root.left.right = new TreeNode(4);
  
  // Convert the binary tree to a binary search tree
  const result = convertBinaryTreeToBST(root);
  
  // Print the resulting binary search tree
  console.log(result);  