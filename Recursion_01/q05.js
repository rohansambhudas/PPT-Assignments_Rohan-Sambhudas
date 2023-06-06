// **Question 5**

// Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

// **Example 1:**

// Input: arr = {1, 4, 3, -5, -4, 8, 6};
// Output: 8

// **Example 2:**

// Input: arr = {1, 4, 45, 6, 10, -8};
// Output: 45

function findMax(arr, index, max) {
    if (index === arr.length) {
      return max;
    }
  
    if (arr[index] > max) {
      max = arr[index];
    }
  
    return findMax(arr, index + 1, max);
  }
  
  // Example usage
  const arr1 = [1, 4, 3, -5, -4, 8, 6];
  console.log(findMax(arr1, 0, arr1[0])); // Output: 8
  
  const arr2 = [1, 4, 45, 6, 10, -8];
  console.log(findMax(arr2, 0, arr2[0])); // Output: 45  