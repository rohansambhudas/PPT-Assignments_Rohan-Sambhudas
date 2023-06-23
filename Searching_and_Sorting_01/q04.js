// 4. **Maximum Gap**

// Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return `0`.

// You must write an algorithm that runs in linear time and uses linear extra space.

// **Example 1:**

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

// **Constraints:**

// - `1 <= nums.length <= 10^5`
// - `0 <= nums[i] <= 10^9`

function maximumGap(nums) {
    if (nums.length < 2) {
      return 0; // Return 0 if the array contains less than 2 elements
    }
  
    // Perform Radix Sort to sort the array
    radixSort(nums);
  
    // Find the maximum gap between successive elements
    let maxGap = 0;
    for (let i = 1; i < nums.length; i++) {
      maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
    }
  
    return maxGap;
  }
  
  function radixSort(nums) {
    const max = Math.max(...nums);
    const exp = 1;
  
    while (Math.floor(max / exp) > 0) {
      countingSort(nums, exp);
      exp *= 10;
    }
  }
  
  function countingSort(nums, exp) {
    const count = Array(10).fill(0);
    const n = nums.length;
    const output = Array(n);
  
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(nums[i] / exp) % 10;
      count[digit]++;
    }
  
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
  
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(nums[i] / exp) % 10;
      output[count[digit] - 1] = nums[i];
      count[digit]--;
    }
  
    for (let i = 0; i < n; i++) {
      nums[i] = output[i];
    }
  }  