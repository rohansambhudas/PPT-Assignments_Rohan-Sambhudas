// **Question 3**

// ****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

// **Example 1:**

// Input :  set = “abc”

// Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

// **Example 2:**

// Input : set = “abcd”

// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

function generateSubsets(set) {
    const subsets = [];
    generateSubsetsHelper(set, "", 0, subsets);
    return subsets;
  }
  
  function generateSubsetsHelper(set, currentSubset, index, subsets) {
    if (index === set.length) {
      subsets.push(currentSubset);
      return;
    }
  
    // Include the current character in the subset
    generateSubsetsHelper(set, currentSubset + set[index], index + 1, subsets);
  
    // Exclude the current character from the subset
    generateSubsetsHelper(set, currentSubset, index + 1, subsets);
  }
  
  // Example usage
  console.log(generateSubsets("abc")); // Output: ["", "a", "ab", "abc", "ac", "b", "bc", "c"]
  console.log(generateSubsets("abcd")); // Output: ["", "a", "ab", "abc", "abcd", "abd", "ac", "acd", "ad", "b", "bc", "bcd", "bd", "c", "cd", "d"]  