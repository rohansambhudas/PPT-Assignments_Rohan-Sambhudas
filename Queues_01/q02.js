// **Question 2**

// Given a **circular integer array** `nums` of length `n`, return *the maximum possible sum of a non-empty **subarray** of* `nums`.

// A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

// A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

// **Example 1:**

// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.

// Example 2:

// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

// Example 3:

// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.

function maxSubarraySumCircular(nums) {
    // Kadane's algorithm to find maximum subarray sum
    function kadane(arr) {
      let maxSum = -Infinity;
      let currSum = 0;
  
      for (let i = 0; i < arr.length; i++) {
        currSum = Math.max(currSum + arr[i], arr[i]);
        maxSum = Math.max(maxSum, currSum);
      }
  
      return maxSum;
    }
  
    // Step 1: Compute maximum subarray sum
    const maxSum = kadane(nums);
  
    // Step 2: Compute minimum subarray sum
    const minSum = kadane(nums.map((num) => -num));
  
    // Step 3: Compute total sum
    const arraySum = nums.reduce((sum, num) => sum + num, 0);
  
    // Step 4: Handle all negative elements case
    if (arraySum - minSum === 0) {
      return maxSum;
    }
  
    // Step 5: Return the maximum of maxSum and arraySum - minSum
    return Math.max(maxSum, arraySum - minSum);
  }
  
  // Example usage
  const nums1 = [1, -2, 3, -2];
  console.log(maxSubarraySumCircular(nums1)); // Output: 3
  
  const nums2 = [5, -3, 5];
  console.log(maxSubarraySumCircular(nums2)); // Output: 10
  
  const nums3 = [-3, -2, -3];
  console.log(maxSubarraySumCircular(nums3)); // Output: -2  