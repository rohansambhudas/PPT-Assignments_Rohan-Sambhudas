// Question-1

// Given a binary tree, your task is to find subtree with maximum sum in tree.

// Examples:

// Input1 :       

//        1

//      /   \

//    2      3

//   / \    / \

// 4   5  6   7

// Output1 : 28

// As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.

// Input2 :

//        1

//      /    \

//   -2      3

//   / \    /  \

// 4   5  -6   2

// Output2 : 7

// Subtree with largest sum is :

//  -2

//  / \

// 4   5

// Also, entire tree sum is also 7.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function findMaxSubtreeSum(root) {
    // Initialize the maximum sum as negative infinity
    let maxSum = -Infinity;
  
    // Recursive function to calculate subtree sum
    function findSubtreeSum(node) {
      if (node === null) {
        return 0;
      }
  
      // Calculate the sum of left and right subtrees
      const leftSum = findSubtreeSum(node.left);
      const rightSum = findSubtreeSum(node.right);
  
      // Calculate the sum of the current subtree
      const subtreeSum = node.val + leftSum + rightSum;
  
      // Update the maximum sum if necessary
      maxSum = Math.max(maxSum, subtreeSum);
  
      // Return the sum of the current subtree
      return subtreeSum;
    }
  
    // Start the recursive calculation from the root
    findSubtreeSum(root);
  
    // Return the maximum sum
    return maxSum;
  }
  
  // Create the binary tree from the example
  const root = new TreeNode(1);
  root.left = new TreeNode(-2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(-6);
  root.right.right = new TreeNode(2);
  
  // Find the subtree with the maximum sum
  const maxSubtreeSum = findMaxSubtreeSum(root);
  console.log(maxSubtreeSum); // Output: 7  