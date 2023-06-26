// Question-2

// Construct the BST (Binary Search Tree) from its given level order traversal.

// Example:

// Input: arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output: BST:

//             7

//          /    \

//        4     12

//      /  \     /

//     3   6  8

//    /    /     \

//  1    5      10

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBST(levelOrder) {
    if (levelOrder.length === 0) {
      return null;
    }
  
    // Create the root node from the first element in the level order traversal
    const root = new TreeNode(levelOrder[0]);
  
    // Split the level order traversal into left and right subtrees
    const leftSubtree = [];
    const rightSubtree = [];
    let i = 1;
    while (i < levelOrder.length && levelOrder[i] < root.val) {
      leftSubtree.push(levelOrder[i]);
      i++;
    }
    while (i < levelOrder.length) {
      rightSubtree.push(levelOrder[i]);
      i++;
    }
  
    // Recursively construct the left and right subtrees
    root.left = constructBST(leftSubtree);
    root.right = constructBST(rightSubtree);
  
    return root;
  }
  
  // Example level order traversal array
  const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  
  // Construct the BST
  const root = constructBST(levelOrder);
  
  // Function to perform an inorder traversal of the BST
  function inorderTraversal(node) {
    if (node === null) {
      return;
    }
    inorderTraversal(node.left);
    console.log(node.val);
    inorderTraversal(node.right);
  }
  
  // Perform an inorder traversal to verify the BST
  inorderTraversal(root);  