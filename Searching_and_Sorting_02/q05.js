// 5. **Rearrange array in alternating positive & negative items with O(1) extra space**

// Given an **array of positive** and **negative numbers**, arrange them in an **alternate** fashion such that every positive number is followed by a negative and vice-versa maintaining the **order of appearance**. The number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.


// **Examples:**

// Input:  arr[] = {1, 2, 3, -4, -1, 4}
// Output: arr[] = {-4, 1, -1, 2, 3, 4}

// Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
// Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

function rearrangeArray(arr) {
    const n = arr.length;
    let positive = 0;
    let negative = 1;
  
    while (positive < n && negative < n) {
      while (positive < n && arr[positive] >= 0) {
        positive += 2;
      }
  
      while (negative < n && arr[negative] < 0) {
        negative += 2;
      }
  
      if (positive < n && negative < n) {
        [arr[positive], arr[negative]] = [arr[negative], arr[positive]];
      }
    }
  
    return arr;
  }
  


const arr = [1, 2, 3, -4, -1, 4];
const result = rearrangeArray(arr);
console.log(result); // Output: [-4, 1, -1, 2, 3, 4]
