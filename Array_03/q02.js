// Question 2
// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//            ● 0 <= a, b, c, d < n
//            ● a, b, c, and d are distinct.
//            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

function fourSum(nums, target) {
    const n = nums.length;
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const quadruplets = [];
  
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicates for the first element of the quadruplet
      }
  
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue; // Skip duplicates for the second element of the quadruplet
        }
  
        let left = j + 1; // Pointer at the element next to nums[j]
        let right = n - 1; // Pointer at the last element
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right]; // Calculate the current sum
  
          if (sum === target) {
            quadruplets.push([nums[i], nums[j], nums[left], nums[right]]); // Found a quadruplet
            left++;
            right--;
  
            while (left < right && nums[left] === nums[left - 1]) {
              left++; // Skip duplicates for the third element of the quadruplet
            }
            while (left < right && nums[right] === nums[right + 1]) {
              right--; // Skip duplicates for the fourth element of the quadruplet
            }
          } else if (sum < target) {
            left++; // Current sum is smaller than the target, move left pointer to the right
          } else {
            right--; // Current sum is larger than the target, move right pointer to the left
          }
        }
      }
    }
  
    return quadruplets; // Return the array of quadruplets
  }
  
  // Example usage
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result);
  // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]  