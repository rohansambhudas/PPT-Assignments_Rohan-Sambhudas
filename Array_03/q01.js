// Question 1
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

function threeSumClosest(nums, target) {
    const n = nums.length;
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize the closest sum
  
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1; // Pointer at the element next to nums[i]
      let right = n - 1; // Pointer at the last element
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right]; // Calculate the current sum
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum; // Update the closest sum if the current sum is closer to the target
        }
  
        if (sum === target) {
          return sum; // Found an exact match, return the sum
        } else if (sum < target) {
          left++; // Current sum is smaller than the target, move left pointer to the right
        } else {
          right--; // Current sum is larger than the target, move right pointer to the left
        }
      }
    }
  
    return closestSum; // Return the closest sum
  }
  
  // Example usage
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const result = threeSumClosest(nums, target);
  console.log(result); // Output: 2  