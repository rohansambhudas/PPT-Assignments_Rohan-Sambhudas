// **Question 7**

// Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

// **Examples:**

// Input: str = “cd”


// **Output:** cd dc

// **Input:** str = “abb”

// **Output:** abb abb bab bba bab bba

function swap(str, i, j) {
    const arr = str.split("");
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr.join("");
  }
  
  function permute(str, l, r, result) {
    if (l === r) {
      result.push(str);
      return;
    }
  
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r, result);
      str = swap(str, l, i); // backtrack to restore the original string
    }
  }
  
  function printPermutations(str) {
    const result = [];
    permute(str, 0, str.length - 1, result);
    return result;
  }
  
  // Example usage
  const str = "abb";
  const permutations = printPermutations(str);
  console.log(permutations.join(" "));  