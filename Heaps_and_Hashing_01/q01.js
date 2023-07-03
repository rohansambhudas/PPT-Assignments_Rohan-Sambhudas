// Question-1:

// Given preorder of a binary tree, calculate its **[depth(or height)](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)** [starting from depth 0]. The preorder is given as a string with two possible characters.

// 1. ‘l’ denotes the leaf
// 2. ‘n’ denotes internal node

// The given tree can be seen as a full binary tree where every node has 0 or two children. The two children of a node can ‘n’ or ‘l’ or mix of both.

// **Examples :**

// Input  : nlnll
// Output : 2

// Input  : nlnnlll
// Output : 3

function calculateDepth(preorder) {
    const stack = [];
    let depth = 0;
  
    for (let i = 0; i < preorder.length; i++) {
      if (preorder[i] === 'n') {
        stack.push(preorder[i]);
      } else if (preorder[i] === 'l') {
        while (stack.length > 0 && stack[stack.length - 1] === 'l') {
          stack.pop();
        }
        if (stack.length > 0) {
          stack.pop();
        }
        stack.push('l');
      }
  
      depth = Math.max(depth, stack.length);
    }
  
    return depth;
  }
  
  // Example input preorder traversal
  const preorder = 'nlnll';
  
  // Calculate the depth of the binary tree
  const result = calculateDepth(preorder);
  
  // Print the result
  console.log('Depth:', result);  