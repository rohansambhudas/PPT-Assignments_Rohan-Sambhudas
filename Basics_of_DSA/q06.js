// 6. **Top K Frequent Words**

// Given an array of strings `words` and an integer `k`, return *the* `k` *most frequent strings*.

// Return the answer **sorted** by **the frequency** from highest to lowest. Sort the words with the same frequency by their **lexicographical order**.

// **Example 1:**

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// **Constraints:**

// - `1 <= words.length <= 500`
// - `1 <= words[i].length <= 10`
// - `words[i]` consists of lowercase English letters.
// - `k` is in the range `[1, The number of **unique** words[i]]`

function topKFrequentWords(words, k) {
    const frequencyMap = new Map();
  
    // Count the frequency of each word
    for (const word of words) {
      frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }
  
    // Sort the words based on frequency and lexicographical order
    const sortedWords = Array.from(frequencyMap.keys()).sort((a, b) => {
      const frequencyA = frequencyMap.get(a);
      const frequencyB = frequencyMap.get(b);
  
      // Sort by frequency (higher frequency comes first)
      if (frequencyA !== frequencyB) {
        return frequencyB - frequencyA;
      }
  
      // If frequency is the same, sort lexicographically
      return a.localeCompare(b);
    });
  
    // Return the top k frequent words
    return sortedWords.slice(0, k);
  }
  
  // Test case
  console.log(topKFrequentWords(["i", "love", "leetcode", "i", "love", "coding"], 2));
  // Output: ["i", "love"]  