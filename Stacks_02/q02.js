// **Question 2**

// Given a stack of integers, sort it in ascending order using another temporary stack.

// **Examples:**

// Input : [34, 3, 31, 98, 92, 23]
// Output : [3, 23, 31, 34, 92, 98]

// Input : [3, 5, 1, 4, 2, 8]
// Output : [1, 2, 3, 4, 5, 8]

function sortArrayUsingStack(arr) {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
        arr[i] = stack.pop();
      }
      stack.push(arr[i]);
    }
    while (stack.length > 0) {
      arr[arr.length - stack.length] = stack.pop();
    }
    return arr;
  }
  
  // Example usage
  const arr1 = [34, 3, 31, 98, 92, 23];
  console.log(sortArrayUsingStack(arr1)); // Output: [3, 23, 31, 34, 92, 98]
  
  const arr2 = [3, 5, 1, 4, 2, 8];
  console.log(sortArrayUsingStack(arr2)); // Output: [1, 2, 3, 4, 5, 8]  