// **Question 7**

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// **Example 1:**

// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    let num = 1; // Start from 1
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
  
    while (rowStart <= rowEnd && colStart <= colEnd) {
      // Traverse right
      for (let col = colStart; col <= colEnd; col++) {
        matrix[rowStart][col] = num++;
      }
      rowStart++;
  
      // Traverse down
      for (let row = rowStart; row <= rowEnd; row++) {
        matrix[row][colEnd] = num++;
      }
      colEnd--;
  
      if (rowStart <= rowEnd) {
        // Traverse left
        for (let col = colEnd; col >= colStart; col--) {
          matrix[rowEnd][col] = num++;
        }
        rowEnd--;
      }
  
      if (colStart <= colEnd) {
        // Traverse up
        for (let row = rowEnd; row >= rowStart; row--) {
          matrix[row][colStart] = num++;
        }
        colStart++;
      }
    }
  
    return matrix;
  }
  
  // Example usage
  const n = 3;
  const matrix = generateMatrix(n);
  console.log(matrix);
  // Output: [[1,2,3],[8,9,4],[7,6,5]]  