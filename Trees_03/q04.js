// Question-4:

// Given Preorder, Inorder and Postorder traversals of some tree. Write a program to check if they all are of the same tree.

// **Examples:**

// Input : 

//         Inorder -> 4 2 5 1 3
//         Preorder -> 1 2 4 5 3
//         Postorder -> 4 5 2 3 1
// Output : 

// Yes
// Explanation : 

// All of the above three traversals are of
// the same tree 

//                            1
//                          /   \
//                         2     3
//                       /   \
//                      4     5

// Input : 

//         Inorder -> 4 2 5 1 3
//         Preorder -> 1 5 4 2 3
//         Postorder -> 4 1 2 3 5
// Output : 

// No
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function areTraversalsSame(preorder, inorder, postorder) {
    if (preorder.length === 0 && inorder.length === 0 && postorder.length === 0) {
      return true;
    }
  
    if (
      preorder.length !== inorder.length ||
      inorder.length !== postorder.length
    ) {
      return false;
    }
  
    const rootVal = preorder[0];
    const rootIndex = inorder.indexOf(rootVal);
  
    if (rootIndex === -1) {
      return false;
    }
  
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);
  
    const leftPreorder = preorder.slice(1, rootIndex + 1);
    const rightPreorder = preorder.slice(rootIndex + 1);
  
    const leftPostorder = postorder.slice(0, rootIndex);
    const rightPostorder = postorder.slice(rootIndex, -1);
  
    const leftSame = areTraversalsSame(
      leftPreorder,
      leftInorder,
      leftPostorder
    );
    const rightSame = areTraversalsSame(
      rightPreorder,
      rightInorder,
      rightPostorder
    );
  
    return leftSame && rightSame;
  }
  
  // Example input traversals
  const inorder = [4, 2, 5, 1, 3];
  const preorder = [1, 2, 4, 5, 3];
  const postorder = [4, 5, 2, 3, 1];
  
  // Check if the traversals are of the same tree
  const result = areTraversalsSame(preorder, inorder, postorder);
  
  // Print the result
  console.log(result ? 'Yes' : 'No');  