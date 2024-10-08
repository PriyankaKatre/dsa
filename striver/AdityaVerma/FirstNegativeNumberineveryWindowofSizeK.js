function firstNegativeInWindow(arr, k) {
  let result = [];
  let negatives = []; // Array to store indices of negative numbers

  for (let i = 0; i < arr.length; i++) {
    // Remove elements out of this window
    if (i >= k && negatives[0] === i - k) {
      negatives.shift();
    }

    // Add current element if it's negative
    if (arr[i] < 0) {
      negatives.push(i);
    }

    // The first negative number in the current window
    if (i >= k - 1) {
      if (negatives.length > 0) {
        result.push(arr[negatives[0]]);
      } else {
        result.push(0); // If no negative number is present in this window
      }
    }
  }

  return result;
}

// Example usage:
const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;
console.log(firstNegativeInWindow(arr, k)); // Output: [-1, -1, -7, -15, -15, 0]
