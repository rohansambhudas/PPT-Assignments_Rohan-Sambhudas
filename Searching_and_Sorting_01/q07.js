// 7. **Longest Increasing Subsequence**

// Given an integer array `nums`, return *the length of the longest **strictly increasing***

// ***subsequence***

// .

// **Example 1:**

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1


// **Constraints:**

// - `1 <= nums.length <= 2500`
// - `-10^4 <= nums[i] <= 10^4`

function lengthOfLIS(nums) {
    const n = nums.length;
    const dp = Array(n).fill(1); // Initialize dp array with 1s
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
  
    let maxLength = 0;
    for (let i = 0; i < n; i++) {
      maxLength = Math.max(maxLength, dp[i]);
    }
  
    return maxLength;
  }

let arr = [7,7,7,7,7,7,7]
console.log(lengthOfLIS(arr))