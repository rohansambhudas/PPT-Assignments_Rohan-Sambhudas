// **Question 4**

// You need to construct a binary tree from a string consisting of parenthesis and integers.

// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
// You always start to construct the **left** child node of the parent first if it exists.

// **Input:** s = "4(2(3)(1))(6(5))"

// **Output:** [4,2,6,3,1,5]

class TreeNode {
    constructor(val, left, right) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function str2tree(s) {
    if (!s) {
      return null;
    }
  
    let i = 0;
  
    // Extract the value of the current node
    let num = '';
    while (i < s.length && (s[i] === '-' || isDigit(s[i]))) {
      num += s[i];
      i++;
    }
  
    const root = new TreeNode(Number(num));
  
    // Check if there are left and right subtrees
    if (i < s.length) {
      let count = 0;
      let start = i;
  
      // Find the index of the closing parenthesis for the left subtree
      while (i < s.length) {
        if (s[i] === '(') {
          count++;
        } else if (s[i] === ')') {
          count--;
        }
  
        if (count === 0) {
          break;
        }
  
        i++;
      }
  
      // Construct the left subtree
      root.left = str2tree(s.substring(start + 1, i));
  
      // Check if there is a right subtree
      if (i + 1 < s.length) {
        // Construct the right subtree
        root.right = str2tree(s.substring(i + 2, s.length - 1));
      }
    }
  
    return root;
  }
  
  function isDigit(char) {
    return char >= '0' && char <= '9';
  }
  
  function inorderTraversal(root) {
    if (!root) {
      return [];
    }
  
    const result = [];
  
    function traverse(node) {
      if (!node) {
        return;
      }
  
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
  
    traverse(root);
  
    return result;
  }
  
  // Example usage
  const s = "4(2(3)(1))(6(5))";
  const root = str2tree(s);
  const result = inorderTraversal(root);
  console.log(result);
  // Output: [3, 2, 1, 4, 5, 6]  