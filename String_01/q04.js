// **Question 4**

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"

function reverseWords(s) {
    // Split the string into words
    const words = s.split(' ');
  
    // Reverse each word
    const reversedWords = words.map(word => reverseWord(word));
  
    // Join the reversed words back together
    const result = reversedWords.join(' ');
  
    return result;
  }
  
  function reverseWord(word) {
    // Convert the word to an array of characters
    const chars = word.split('');
  
    // Reverse the array of characters
    const reversedChars = chars.reverse();
  
    // Join the reversed characters back together
    const reversedWord = reversedChars.join('');
  
    return reversedWord;
  }
  
  // Example usage
  const s = "Let's take LeetCode contest";
  const result = reverseWords(s);
  console.log(result);
  // Output: "s'teL ekat edoCteeL tsetnoc"  