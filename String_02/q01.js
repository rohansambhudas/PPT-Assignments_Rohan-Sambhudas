// **Question 1**

// Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

// **Example 1:**

// **Input:** s1 = "sea", s2 = "eat"

// **Output:** 231

// **Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

// Deleting "t" from "eat" adds 116 to the sum.

// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

function minimumDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;
  
    // Create a 2D array to store the cost of transforming one string into another
    const dp = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(0));
  
    // Initialize the first row and first column of the dp array
    for (let i = 1; i <= m; i++) {
      dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }
    for (let j = 1; j <= n; j++) {
      dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }
  
    // Fill in the rest of the dp array
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + s1.charCodeAt(i - 1),
            dp[i][j - 1] + s2.charCodeAt(j - 1)
          );
        }
      }
    }
  
    return dp[m][n];
  }
  
  // Example usage
  const s1 = "sea";
  const s2 = "eat";
  const result = minimumDeleteSum(s1, s2);
  console.log(result);
  // Output: 231  