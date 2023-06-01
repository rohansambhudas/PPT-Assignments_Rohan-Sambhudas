// **Question 6**

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// **Example 1:**

// **Input:** nums = [4,3,2,7,8,2,3,1]

// **Output:**

// [2,3]

function findDuplicates(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const absNum = Math.abs(nums[i]);
      const index = absNum - 1;
  
      if (nums[index] < 0) {
        result.push(absNum);
      } else {
        nums[index] *= -1;
      }
    }
  
    return result;
  }
  
  // Example usage
  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
  const result = findDuplicates(nums);
  console.log(result);
  // Output: [2, 3]
  