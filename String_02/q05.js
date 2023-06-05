// **Question 5**

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

// - If the group's length is 1, append the character to s.
// - Otherwise, append the character followed by the group's length.

// The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done **modifying the input array,** return *the new length of the array*.

// You must write an algorithm that uses only constant extra space.

// **Example 1:**

// **Input:** chars = ["a","a","b","b","c","c","c"]

// **Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

// **Explanation:**

// The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

function compress(chars) {
    let anchor = 0; // Anchor to keep track of the start of each group
    let writeIndex = 0; // Current position to write the compressed characters
    let count = 1; // Count of consecutive repeating characters
  
    for (let i = 1; i <= chars.length; i++) {
      // Check if the current character is different from the previous one or it's the end of the array
      if (i === chars.length || chars[i] !== chars[i - 1]) {
        chars[writeIndex] = chars[anchor]; // Write the character at the current writeIndex
        writeIndex++;
  
        // Check if the count is greater than 1 to add the count of repeating characters
        if (count > 1) {
          const countChars = count.toString().split(''); // Split the count into individual digits
  
          for (let j = 0; j < countChars.length; j++) {
            chars[writeIndex] = countChars[j];
            writeIndex++;
          }
        }
  
        anchor = i; // Move the anchor to the next group
        count = 1; // Reset the count
      } else {
        count++; // Increment the count for consecutive repeating characters
      }
    }
  
    return writeIndex; // Return the new length of the array
  }
  
  // Example usage
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const newLength = compress(chars);
  console.log(newLength); // Output: 6
  console.log(chars.slice(0, newLength)); // Output: ["a", "2", "b", "2", "c", "3"]  