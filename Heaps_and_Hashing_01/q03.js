// Question-3:

// Given a Binary Tree, print the Right view of it.

// The right view of a Binary Tree is a set of nodes visible when the tree is visited from the Right side.

// **Examples:**

// **Input:**

//          1

//       /     \

//    2         3

// /   \       /  \

// 4     5   6    7

//              \

//                8

// **Output**: 

// Right view of the tree is 1 3 7 8

// **Input:**

//          1

//        /

//     8

//   /

// 7

// **Output**: 

// Right view of the tree is 1 8 7

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function printRightView(root) {
    if (!root) return [];
  
    const queue = [root];
    let rightView = [];
  
    while (queue.length > 0) {
      const size = queue.length;
      let levelNodes = [];
  
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        levelNodes.push(node.val);
  
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
  
      rightView.push(levelNodes[levelNodes.length - 1]);
    }
  
    return rightView;
  }
  
  // Create the binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  root.right.right.right = new TreeNode(8);
  
  // Print the right view of the binary tree
  const result = printRightView(root);
  
  // Print the result
  console.log('Right View:', result.join(' '));  