// Question 4
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

function canPlaceFlowers(flowerbed, n) {
    const length = flowerbed.length;
    let count = 0;
  
    for (let i = 0; i < length; i++) {
      if (flowerbed[i] === 0) {
        const prev = i === 0 ? 0 : flowerbed[i - 1];
        const next = i === length - 1 ? 0 : flowerbed[i + 1];
        
        if (prev === 0 && next === 0) {
          flowerbed[i] = 1; // Plant a flower
          count++;
  
          if (count === n) {
            return true; // All flowers planted
          }
        }
      }
    }
  
    return false; // Unable to plant all flowers
  }
  
  // Example usage
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  const result = canPlaceFlowers(flowerbed, n);
  console.log(result); // Output: true  