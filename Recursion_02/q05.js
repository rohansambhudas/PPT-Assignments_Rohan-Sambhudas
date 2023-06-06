// **Question 5**

// We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

// **Examples :**

// Input  : S = "abcab"
// Output : 7
// There are 15 substrings of "abcab"
// a, ab, abc, abca, abcab, b, bc, bca
// bcab, c, ca, cab, a, ab, b
// Out of the above substrings, there
// are 7 substrings : a, abca, b, bcab,
// c, a and b.

// Input  : S = "aba"
// Output : 4
// The substrings are a, b, a and aba

function countSubstrings(str) {
    let count = 0;
  
    // Helper function to check if a substring is valid
    function isPalindrome(start, end) {
      while (start <= end) {
        if (str[start] !== str[end]) {
          return false;
        }
        start++;
        end--;
      }
      return true;
    }
  
    // Recursive function to find substrings
    function findSubstrings(start) {
      if (start >= str.length) {
        return;
      }
  
      for (let end = start; end < str.length; end++) {
        if (isPalindrome(start, end)) {
          count++;
        }
      }
  
      findSubstrings(start + 1);
    }
  
    // Start with each character as a substring
    findSubstrings(0);
  
    return count;
  }
  
  // Example usage
  console.log(countSubstrings("abcab")); // Output: 7
  console.log(countSubstrings("aba")); // Output: 4  