// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

function minimumScore(nums, k) {
    const n = nums.length;
    let min = nums[0];
    let max = nums[0];
  
    // Find the minimum and maximum values in nums
    for (let i = 1; i < n; i++) {
      min = Math.min(min, nums[i]);
      max = Math.max(max, nums[i]);
    }
  
    // Check if the difference between min and max is within the range [-k, k]
    if (max - min <= 2 * k) {
      return 0; // No operation needed, score is 0
    }
  
    // Adjust the minimum and maximum values to be within the range [-k, k]
    min += k;
    max -= k;
  
    // Calculate the updated difference between min and max
    return max - min;
  }
  
  // Example usage
  const nums = [1];
  const k = 0;
  const result = minimumScore(nums, k);
  console.log(result); // Output: 0  