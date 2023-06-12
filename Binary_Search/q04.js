// **Question 4**

// Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

// There is only **one repeated number** in `nums`, return *this repeated number*.

// You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

// **Example 1:**

// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

function findDuplicate(nums) {
    let left = 1;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      // Count the numbers <= mid
      let count = 0;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= mid) {
          count++;
        }
      }
  
      if (count <= mid) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;
  }
  
  // Example usage
  console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
  console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3  