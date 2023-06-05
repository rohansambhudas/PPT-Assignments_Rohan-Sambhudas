// **Question 3**

// Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

// In one **step**, you can delete exactly one character in either string.

// **Example 1:**

// **Input:** word1 = "sea", word2 = "eat"

// **Output:** 2

// **Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Create a 2D array to store the lengths of LCS
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(0);
    }
  
    // Calculate the LCS lengths
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    // Calculate the minimum number of steps
    const lcsLength = dp[m][n];
    const steps = m + n - 2 * lcsLength;
  
    return steps;
  }
  
  // Example usage
  const word1 = "sea";
  const word2 = "eat";
  const result = minDistance(word1, word2);
  console.log(result);
  // Output: 2  