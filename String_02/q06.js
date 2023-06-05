// **Question 6**

// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".

function findAnagrams(s, p) {
    const result = [];
    const pFreqMap = createFrequencyMap(p); // Create frequency map for string p
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      // Expand the window
      if (pFreqMap.hasOwnProperty(s[right])) {
        pFreqMap[s[right]]--; // Decrement the frequency of the character
        if (pFreqMap[s[right]] === 0) {
          delete pFreqMap[s[right]]; // Remove character from the map if frequency becomes 0
        }
      }
  
      // Check if the window size is equal to the length of string p
      if (right - left + 1 === p.length) {
        if (Object.keys(pFreqMap).length === 0) {
          result.push(left); // Start index of anagram found
        }
  
        // Shrink the window
        if (pFreqMap.hasOwnProperty(s[left])) {
          pFreqMap[s[left]]++; // Increment the frequency of the character
        } else {
          pFreqMap[s[left]] = 1; // Add the character to the frequency map
        }
  
        left++; // Move the left pointer to the right
      }
  
      right++; // Move the right pointer to the right
    }
  
    return result;
  }
  
  function createFrequencyMap(str) {
    const freqMap = {};
  
    for (let char of str) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
  
    return freqMap;
  }
  
  // Example usage
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  console.log(indices); // Output: [0, 6]  