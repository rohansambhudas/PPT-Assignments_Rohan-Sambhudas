// 1. **Merge Intervals**

// Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

// **Example 1:**

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// **Constraints:**

// - `1 <= intervals.length <= 10000`
// - `intervals[i].length == 2`
// - `0 <= starti <= endi <= 10000`

function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
      return intervals;
    }
  
    // Sort intervals based on start times
    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const previousInterval = mergedIntervals[mergedIntervals.length - 1];
  
      // Check for overlap
      if (currentInterval[0] <= previousInterval[1]) {
        // Merge the intervals
        previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
      } else {
        // Add the interval to the merged list
        mergedIntervals.push(currentInterval);
      }
    }
  
    return mergedIntervals;
  }
  
  // Example usage
  const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
  console.log(mergeIntervals(intervals1)); // Output: [[1, 6], [8, 10], [15, 18]]
  
  const intervals2 = [[1, 4], [4, 5]];
  console.log(mergeIntervals(intervals2)); // Output: [[1, 5]]  