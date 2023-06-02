// **Question 1**

// Given two strings s and t, *determine if they are isomorphic*.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// **Example 1:**

// **Input:** s = "egg", t = "add"

// **Output:** true

function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const mapST = new Map(); // Map to track character mappings from s to t
    const mapTS = new Map(); // Map to track character mappings from t to s
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if (mapST.has(charS)) {
        if (mapST.get(charS) !== charT) {
          return false;
        }
      } else {
        mapST.set(charS, charT);
      }
  
      if (mapTS.has(charT)) {
        if (mapTS.get(charT) !== charS) {
          return false;
        }
      } else {
        mapTS.set(charT, charS);
      }
    }
  
    return true;
  }
  
  // Example usage
  const s = "egg";
  const t = "add";
  const isomorphic = isIsomorphic(s, t);
  console.log(isomorphic);
  // Output: true  