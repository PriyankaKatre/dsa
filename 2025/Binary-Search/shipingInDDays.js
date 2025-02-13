/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights); // Minimum capacity should be at least the heaviest weight
  let right = weights.reduce((a, b) => a + b, 0); // Maximum capacity is the sum of all weights

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let requiredDays = 1;
    let currentLoad = 0;

    for (let w of weights) {
      if (currentLoad + w > mid) {
        requiredDays++;
        currentLoad = 0;
      }
      currentLoad += w;
    }

    if (requiredDays <= days) {
      right = mid-1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// Example usage
let weights = [30, 11, 23, 4, 20];
let days = 5;
console.log(shipWithinDays(weights, days)); // Output: 30
console.log(shipWithinDays([3, 6, 7, 11], 8)); // Output: 11
