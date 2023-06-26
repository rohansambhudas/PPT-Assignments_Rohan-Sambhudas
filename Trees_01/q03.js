// Question-3

// Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

// Examples:

// Input1 : arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output1 : Yes

// For the given arr[], the Binary Search Tree is:

//             7

//          /    \

//        4     12

//      /  \     /

//     3   6  8

//    /    /     \

//  1    5      10

//  Input2 : arr[] = {11, 6, 13, 5, 12, 10}

//  Output2 : No
 
//  The given arr[] does not represent the level order traversal of a BST.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function canRepresentBST(arr) {
    const n = arr.length;
  
    // Create a stack and set the root of the BST
    const stack = [];
    const root = new TreeNode(arr[0]);
    stack.push(root);
  
    // Iterate through the remaining elements
    for (let i = 1; i < n; i++) {
      let temp = null;
  
      // Keep popping elements from the stack until a greater element is found
      while (stack.length > 0 && arr[i] > stack[stack.length - 1].val) {
        temp = stack.pop();
      }
  
      // If the popped element is greater than the current element, return "No"
      if (temp !== null && temp.val > arr[i]) {
        return "No";
      }
  
      // Create a new node with the current element
      const newNode = new TreeNode(arr[i]);
  
      // If there is a popped element, make the new node its right child
      if (temp !== null) {
        temp.right = newNode;
      }
      // If the stack is empty, make the new node the root
      else if (stack.length === 0) {
        root.left = newNode;
      }
      // Otherwise, make the new node the left child of the top element
      else {
        stack[stack.length - 1].left = newNode;
      }
  
      // Push the new node onto the stack
      stack.push(newNode);
    }
  
    // Check if there are any remaining elements in the stack that violate the BST property
    while (stack.length > 0) {
      const temp = stack.pop();
      if (temp.val < stack[stack.length - 1].val) {
        return "No";
      }
    }
  
    return "Yes";
  }
  
  // Example input array
  const arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  
  // Check if the array represents the level order traversal of a BST
  const result = canRepresentBST(arr);
  
  console.log(result);  