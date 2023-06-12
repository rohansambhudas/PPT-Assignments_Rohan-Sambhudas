// **Question 5**

// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

// **Example 1:**

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

function intersection(nums1, nums2) {
    // Sort the arrays
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
  
    const set = new Set();
    for (const num of nums1) {
      if (binarySearch(nums2, num)) {
        set.add(num);
      }
    }
  
    return Array.from(set);
  }
  
  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return true;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  
  // Example usage
  console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
  console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [9, 4]