// **Question 8**

// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      // Check if s has any duplicate characters
      const seen = new Set();
  
      for (let char of s) {
        if (seen.has(char)) {
          return true;
        }
  
        seen.add(char);
      }
  
      return false;
    }
  
    const diff = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diff.push(i);
      }
  
      if (diff.length > 2) {
        return false;
      }
    }
  
    return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
  }
  
  // Example usage
  const s = "ab";
  const goal = "ba";
  const canSwap = buddyStrings(s, goal);
  console.log(canSwap); // Output: true  