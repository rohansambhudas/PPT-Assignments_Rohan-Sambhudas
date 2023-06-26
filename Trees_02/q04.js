// Question-4:

// Write a program to connect nodes at the same level.

// Input:

//         1

//       /   \

//     2      3

//   /   \   /   \

// 4     5 6    7

// Output:

// 1 → -1

// 2 → 3

// 3 → -1

// 4 → 5

// 5 → 6

// 6 → 7

// 7 → -1

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  }
  
  function connectNodesAtSameLevel(root) {
    if (root === null) return;
  
    const queue = [root];
  
    while (queue.length > 0) {
      const size = queue.length;
  
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
  
        if (i < size - 1) {
          node.next = queue[0];
        }
  
        if (node.left) {
          queue.push(node.left);
        }
  
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
  }
  
  // Example input binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  // Connect nodes at the same level
  connectNodesAtSameLevel(root);
  
  // Print the connections
  let current = root;
  while (current) {
    let connections = '';
    let temp = current;
    while (temp) {
      connections += temp.val + ' → ';
      temp = temp.next;
    }
    connections += '-1';
    console.log(connections);
    current = current.left;
  }  