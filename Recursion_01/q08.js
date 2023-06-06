// **Question 8**

// Given an array, find a product of all array elements.

// **Example 1:**

// Input  : arr[] = {1, 2, 3, 4, 5}
// Output : 120
// **Example 2:**

// Input  : arr[] = {1, 6, 3}
// Output : 18

function productOfArray(arr, index) {
    if (index === arr.length - 1) {
      return arr[index];
    } else {
      return arr[index] * productOfArray(arr, index + 1);
    }
  }
  
  function findProduct(arr) {
    return productOfArray(arr, 0);
  }
  
  // Example usage
  console.log(findProduct([1, 2, 3, 4, 5])); // Output: 120
  console.log(findProduct([1, 6, 3])); // Output: 18
  