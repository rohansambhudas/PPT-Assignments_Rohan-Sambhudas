// **Question 4**

// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

function findMaxLength(nums) {
    const n = nums.length;
    const countMap = new Map();
    countMap.set(0, -1); // Initialize countMap with a sum of 0 at index -1
    let maxLen = 0;
    let count = 0;
  
    for (let i = 0; i < n; i++) {
      count += nums[i] === 0 ? -1 : 1;
  
      if (countMap.has(count)) {
        // If count is already present in countMap, update maxLen
        maxLen = Math.max(maxLen, i - countMap.get(count));
      } else {
        // If count is not in countMap, add it with the current index
        countMap.set(count, i);
      }
    }
  
    return maxLen;
  }
  
  // Example usage
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength);
  // Output: 2  