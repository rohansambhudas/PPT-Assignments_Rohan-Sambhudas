// **Question 1**

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// - s[i] == 'I' if perm[i] < perm[i + 1], and
// - s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

// **Example 1:**

// **Input:** s = "IDID"

// **Output:**

// [0,4,1,3,2]

function reconstructPermutation(s) {
    const n = s.length;
    const perm = [];
    let minNum = 0;
    let maxNum = n;
  
    for (let i = 0; i <= n; i++) {
      if (s[i] === "I") {
        perm.push(minNum);
        minNum++;
      } else {
        perm.push(maxNum);
        maxNum--;
      }
    }
  
    return perm;
  }
  
  // Example usage
  const s = "IDID";
  const perm = reconstructPermutation(s);
  console.log(perm);
  // Output: [0, 4, 1, 3, 2]
  