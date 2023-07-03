// Question-4:

// Given a Binary Tree, The task is to print the **bottom view** from left to right. A node **x** is there in output if x is the bottommost node at its horizontal distance. The horizontal distance of the left child of a node x is equal to a horizontal distance of x minus 1, and that of a right child is the horizontal distance of x plus 1.

// **Examples:**

// **Input:**

//              20

//            /     \

//         8         22

//     /      \         \

// 5         3        25

//         /    \

//    10       14

// **Output:** 5, 10, 3, 14, 25.

// **Input:**

//              20

//            /     \

//         8         22

//     /      \      /   \

//  5         3    4     25

//          /    \

//      10       14

// **Output:**

// 5 10 4 14 25.

// **Explanation:**

// If there are multiple bottom-most nodes for a horizontal distance from the root, then print the later one in the level traversal.

// **3 and 4** are both the bottom-most nodes at a horizontal distance of 0, we need to print 4.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.hd = 0; // Horizontal distance from the root
    }
  }
  
  function printBottomView(root) {
    if (!root) return [];
  
    const queue = [root];
    const map = new Map(); // Hash map to store nodes at each horizontal distance
  
    while (queue.length > 0) {
      const node = queue.shift();
      const hd = node.hd;
  
      // Update the hash map with the latest node for the horizontal distance
      map.set(hd, node.val);
  
      if (node.left) {
        node.left.hd = hd - 1;
        queue.push(node.left);
      }
      if (node.right) {
        node.right.hd = hd + 1;
        queue.push(node.right);
      }
    }
  
    // Extract the nodes from the hash map in the order of their horizontal distance
    const bottomView = [];
    for (const [_, val] of map) {
      bottomView.push(val);
    }
  
    return bottomView;
  }
  
  // Create the binary tree
  const root = new TreeNode(20);
  root.left = new TreeNode(8);
  root.right = new TreeNode(22);
  root.left.left = new TreeNode(5);
  root.left.right = new TreeNode(3);
  root.right.right = new TreeNode(25);
  root.left.right.left = new TreeNode(10);
  root.left.right.right = new TreeNode(14);
  
  // Print the bottom view of the binary tree
  const result = printBottomView(root);
  
  // Print the result
  console.log('Bottom View:', result.join(' '));  