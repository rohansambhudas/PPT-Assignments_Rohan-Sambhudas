// **Question 5**

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// **Example 1:**

// **Input:** s = "abcdefg", k = 2

// **Output:**

// "bacdfeg"

function reverseStr(s, k) {
    const chars = s.split(''); // Convert the string to an array of characters
  
    for (let i = 0; i < chars.length; i += 2 * k) {
      let start = i; // Start index of the current chunk
      let end = Math.min(i + k - 1, chars.length - 1); // End index of the first k characters
  
      // Reverse the first k characters in the chunk
      while (start < end) {
        [chars[start], chars[end]] = [chars[end], chars[start]]; // Swap characters
        start++;
        end--;
      }
    }
  
    const result = chars.join(''); // Join the array of characters back into a string
  
    return result;
  }
  
  // Example usage
  const s = "abcdefg";
  const k = 2;
  const result = reverseStr(s, k);
  console.log(result);
  // Output: "bacdfeg"  