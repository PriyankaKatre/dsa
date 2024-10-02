const MaxConsecutiveOnes = (arr, k) => {
  let left = 0,
    right = 0,
    maxLength = 0,
    zeros = 0;

  while (right < arr.length) {
    if (arr[right] === 0) zeros++;
    // while (zeros > k) {
    if (zeros > k) {
      if (arr[left] === 0) zeros--;
      left++;
    }
    // }
    if (zeros <= k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }
  return maxLength;
};

console.log(MaxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
