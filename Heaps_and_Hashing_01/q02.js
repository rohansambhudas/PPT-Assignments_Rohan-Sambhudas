// Question-2:

// Given a Binary tree, the task is to print the **left view** of the Binary Tree. The left view of a Binary Tree is a set of leftmost nodes for every level.

// **Examples:**

// ***Input:***

//             4

//           /   \

//         5     2

//              /   \

//             3     1

//            /  \

//           6    7

// ***Output:** 4 5 3 6*

// ***Input:***

//                     1

//                   /   \

//                 2       3

//                  \

//                    4

//                      \

//                         5

//                            \

//                              6

// **Output:** 1 2 4 5 6

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function printLeftView(root) {
    if (!root) return;
  
    const queue = [root];
    let leftView = [];
  
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
  
      leftView.push(levelNodes[0]);
    }
  
    return leftView;
  }
  
  // Create the binary tree
  const root = new TreeNode(4);
  root.left = new TreeNode(5);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  root.right.right = new TreeNode(1);
  root.right.left.left = new TreeNode(6);
  root.right.left.right = new TreeNode(7);
  
  // Print the left view of the binary tree
  const result = printLeftView(root);
  
  // Print the result
  console.log('Left View:', result.join(' '));  