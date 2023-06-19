// **Question 1**

// Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not exist, return `-1`.

// **Example 1:**

// Input: s = "leetcode"
// Output: 0

// Example 2:

// Input: s = "loveleetcode"
// Output: 2

// Example 3:

// Input: s = "aabb"
// Output: -1

function firstNonRepeatingChar(s) {
    const freqMap = new Map();
    const queue = [];
  
    // Step 1: Create frequency map
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
  
    // Step 2 and 3: Find first non-repeating character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      queue.push(char);
  
      while (queue.length > 0 && freqMap.get(queue[0]) > 1) {
        queue.shift(); // Dequeue characters with frequency > 1
      }
  
      if (queue.length > 0 && freqMap.get(queue[0]) === 1) {
        return i; // Found first non-repeating character
      }
    }
  
    return -1; // No non-repeating character found
  }
  
  // Example usage
  const s1 = "leetcode";
  console.log(firstNonRepeatingChar(s1)); // Output: 0
  
  const s2 = "loveleetcode";
  console.log(firstNonRepeatingChar(s2)); // Output: 2
  
  const s3 = "aabb";
  console.log(firstNonRepeatingChar(s3)); // Output: -1  