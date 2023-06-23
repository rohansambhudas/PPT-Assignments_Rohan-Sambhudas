// 2. **Count of Smaller Numbers After Self**

// Given an integer array `nums`, return *an integer array* `counts` *where* `counts[i]` *is the number of smaller elements to the right of* `nums[i]`.

// **Example 1:**

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are2 smaller elements (2 and 1).
// To the right of 2 there is only1 smaller element (1).
// To the right of 6 there is1 smaller element (1).
// To the right of 1 there is0 smaller element.

// Example 2:

// Input: nums = [-1]
// Output: [0]

// Example 3:

// Input: nums = [-1,-1]
// Output: [0,0]

// **Constraints:**

// - `1 <= nums.length <= 100000`
// - `-10000 <= nums[i] <= 10000`

class TreeNode {
    constructor(val, count = 1, left = null, right = null) {
      this.val = val;
      this.count = count;
      this.left = left;
      this.right = right;
    }
  }
  
  function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
    const sorted = [];
  
    // Perform merge sort while tracking the counts
    for (let i = nums.length - 1; i >= 0; i--) {
      const num = nums[i];
      const index = findIndex(sorted, num);
  
      // Insert the number into the sorted array at the correct position
      sorted.splice(index, 0, num);
  
      // Count the number of smaller elements to the right
      counts[i] = index;
    }
  
    return counts;
  }
  
  function findIndex(sorted, target) {
    let left = 0;
    let right = sorted.length;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (sorted[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;
  }

  
let arr = [-1,-1]
console.log(countSmaller(arr));