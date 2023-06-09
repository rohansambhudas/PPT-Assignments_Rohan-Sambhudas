// 8. **Intersection of Two Arrays II**

// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

// **Example 1:**

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// **Constraints:**

// - `1 <= nums1.length, nums2.length <= 1000`
// - `0 <= nums1[i], nums2[i] <= 1000`

function intersect(nums1, nums2) {
    const map = new Map();
    const result = [];
  
    // Create hashmap of frequencies for nums1
    for (const num of nums1) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  
    // Check for intersection while iterating over nums2
    for (const num of nums2) {
      if (map.has(num) && map.get(num) > 0) {
        result.push(num);
        map.set(num, map.get(num) - 1);
      }
    }
  
    return result;
  }

  
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  const result = intersect(nums1, nums2);
  console.log(result); // Output: [2, 2]  