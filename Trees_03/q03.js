// Question-3:

// Given a binary tree, print all its root-to-leaf paths without using recursion. For example, consider the following Binary Tree.

// Input:

//         6
//      /    \
//     3      5
//   /   \     \
//  2     5     4
//      /   \
//     7     4

// Output:

// There are 4 leaves, hence 4 root to leaf paths -
//   6->3->2
//   6->3->5->7
//   6->3->5->4
//   6->5>4

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function printRootToLeafPaths(root) {
    if (root === null) return;
  
    const stack = [];
    const pathStack = [];
    stack.push(root);
    pathStack.push(root.val);
  
    while (stack.length > 0) {
      const node = stack.pop();
      const path = pathStack.pop();
  
      if (node.left === null && node.right === null) {
        console.log(path);
      }
  
      if (node.right !== null) {
        stack.push(node.right);
        pathStack.push(path + '->' + node.right.val);
      }
  
      if (node.left !== null) {
        stack.push(node.left);
        pathStack.push(path + '->' + node.left.val);
      }
    }
  }
  
  // Example input binary tree
  const root = new TreeNode(6);
  root.left = new TreeNode(3);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(4);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);
  
  // Print all root-to-leaf paths
  printRootToLeafPaths(root);  