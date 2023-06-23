// 2. **Sort Colors**

// Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// **Example 1:**

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]


// **Constraints:**

// - `n == nums.length`
// - `1 <= n <= 300`
// - `nums[i]` is either `0`, `1`, or `2`.

function sortColors(nums) {
    let red = 0; // Pointer for the red section
    let blue = nums.length - 1; // Pointer for the blue section
    let i = 0; // Current index
  
    while (i <= blue) {
      if (nums[i] === 0) {
        // Swap with the red section
        [nums[i], nums[red]] = [nums[red], nums[i]];
        red++;
        i++;
      } else if (nums[i] === 2) {
        // Swap with the blue section
        [nums[i], nums[blue]] = [nums[blue], nums[i]];
        blue--;
      } else {
        // Move to the next element
        i++;
      }
    }
  }
  
  // Example usage
  const nums1 = [2, 0, 2, 1, 1, 0];
  sortColors(nums1);
  console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]
  
  const nums2 = [2, 0, 1];
  sortColors(nums2);
  console.log(nums2); // Output: [0, 1, 2]  