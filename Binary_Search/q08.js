// **Question 8**

// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

// **Example 1:**

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

function intersect(nums1, nums2) {
    const intersectMap = new Map();
    const intersection = [];
    
    // Count the frequency of elements in nums1
    for (const num of nums1) {
      if (intersectMap.has(num)) {
        intersectMap.set(num, intersectMap.get(num) + 1);
      } else {
        intersectMap.set(num, 1);
      }
    }
    
    // Check for intersection with nums2 and decrement frequency in intersectMap
    for (const num of nums2) {
      if (intersectMap.has(num) && intersectMap.get(num) > 0) {
        intersection.push(num);
        intersectMap.set(num, intersectMap.get(num) - 1);
      }
    }
    
    return intersection;
  }
  
  // Example usage
  console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
  console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]  