// 8. **Find K Closest Elements**

// Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

// An integer `a` is closer to `x` than an integer `b` if:

// - `|a - x| < |b - x|`, or
// - `|a - x| == |b - x|` and `a < b`

// **Example 1:**
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// Example 2:
// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

// **Constraints:**

// - `1 <= k <= arr.length`
// - `1 <= arr.length <= 10000`
// - `arr` is sorted in **ascending** order.
// - -`10000 <= arr[i], x <= 10000`

function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;
  
    // Binary search to find the position of x in arr
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === x) {
        left = mid;
        right = mid + 1;
        break;
      } else if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    // Expand the window around x
    left--;
    right++;
    
    // Find k closest elements
    while (k > 0) {
      if (left < 0) {
        right++;
      } else if (right >= arr.length) {
        left--;
      } else if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
        left--;
      } else {
        right++;
      }
      k--;
    }
  
    return arr.slice(left + 1, right);
  }
  
  // Test case
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
  // Output: [1, 2, 3, 4]  