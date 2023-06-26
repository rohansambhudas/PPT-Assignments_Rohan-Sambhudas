// Question-2:

// Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

// Example:

// Consider the following BST:

// **Input-1:**

// n = 9

// values = [8, 3, 1, 6, 4, 7, 10, 14,13]

// node-1 = 6

// node-2 = 14

// **Output-1:**

// The distance between the two keys = 4

// **Input-2:**

// n = 9

// values = [8, 3, 1, 6, 4, 7, 10, 14,13]

// node-1 = 3

// node-2 = 4

// **Output-2:**

// The distance between the two keys = 2

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function findDistance(root, node1, node2) {
    if (root === null) return 0;
  
    if (node1 < root.val && node2 < root.val) {
      return findDistance(root.left, node1, node2);
    } else if (node1 > root.val && node2 > root.val) {
      return findDistance(root.right, node1, node2);
    } else {
      return distanceFromNode(root, node1) + distanceFromNode(root, node2);
    }
  }
  
  function distanceFromNode(root, target) {
    if (root === null) return 0;
  
    if (target < root.val) {
      return 1 + distanceFromNode(root.left, target);
    } else if (target > root.val) {
      return 1 + distanceFromNode(root.right, target);
    }
  
    return 0;
  }
  
  // Example input BST
  const root = new TreeNode(8);
  root.left = new TreeNode(3);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.left.right.left = new TreeNode(4);
  root.left.right.right = new TreeNode(7);
  root.right = new TreeNode(10);
  root.right.right = new TreeNode(14);
  root.right.right.left = new TreeNode(13);
  
  // Example 1
  const node1 = 6;
  const node2 = 14;
  const distance1 = findDistance(root, node1, node2);
  console.log('The distance between the two keys:', distance1);
  
  // Example 2
  const node3 = 3;
  const node4 = 4;
  const distance2 = findDistance(root, node3, node4);
  console.log('The distance between the two keys:', distance2);  