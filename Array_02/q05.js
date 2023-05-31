// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
  
    const n = nums.length;
    const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const option2 = nums[0] * nums[1] * nums[n - 1];
  
    return Math.max(option1, option2);
  }
  
  // Example usage
  const nums = [1, 2, 3];
  const result = maximumProduct(nums);
  console.log(result); // Output: 6  