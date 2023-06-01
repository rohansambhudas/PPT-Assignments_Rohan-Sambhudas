// **Question 6**

// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// **Example 1:**

// **Input:** changed = [1,3,4,2,6,8]

// **Output:** [1,3,4]

// **Explanation:** One possible original array could be [1,3,4]:

// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4].

function findOriginalArray(changed) {
    const n = changed.length;
    if (n % 2 !== 0) {
      return [];
    }
  
    const original = [];
    const countMap = new Map();
  
    // Count the occurrences of each element in the changed array
    for (let i = 0; i < n; i++) {
      countMap.set(changed[i], (countMap.get(changed[i]) || 0) + 1);
    }
  
    // Iterate through the changed array
    for (let i = 0; i < n; i++) {
      const num = changed[i];
      if (countMap.get(num) > 0) {
        const halfNum = num / 2;
        // Check if the half value exists in the count map
        if (countMap.get(halfNum) > 0) {
          original.push(halfNum);
          countMap.set(halfNum, countMap.get(halfNum) - 1);
          countMap.set(num, countMap.get(num) - 1);
        } else {
          return [];
        }
      }
    }
  
    // Check if all elements have been used
    for (let [key, count] of countMap) {
      if (count > 0) {
        return [];
      }
    }
  
    return original;
  }
  
  // Example usage
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);
  // Output: [1, 3, 4]  