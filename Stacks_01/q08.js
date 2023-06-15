// **Question 8**

// Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

// **Example 1:**

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

function trapWater(height) {
  let waterTrapped = 0; // Variable to store the total water trapped
  const stack = []; // Stack to store the indices of the elevation bars

  for (let i = 0; i < height.length; i++) {
    while (stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop(); // Index of the top bar in the stack
      if (stack.length === 0) {
        break; // No left boundary, so water cannot be trapped
      }

      const distance = i - stack[stack.length - 1] - 1; // Width of the container
      const boundedHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top]; // Height of the water

      waterTrapped += distance * boundedHeight; // Calculate the water trapped
    }

    stack.push(i); // Push the current index to the stack
  }

  return waterTrapped;
}

// Example usage
const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapWater(height1)); // Output: 6

const height2 = [4, 2, 0, 3, 2, 5];
console.log(trapWater(height2)); // Output: 9