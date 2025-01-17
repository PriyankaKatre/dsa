const longestSubarrayWithSumK = (array, k) => {
  let sum = 0;
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let newAyyarIndex = [],
    indexArray = [];

  while (right < array.length) {
    sum += array[right];

    while (sum > k) {
      sum = sum - array[left];
      left++;
    }
    if (sum === k) {
      indexArray = [];
      newAyyarIndex = array.slice(left, right + 1);
      for (let i = left; i <= right; i++) {
        indexArray.push(i);
      }
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }
  return indexArray;
};

const arr = [10, 5, 2, 5, 1, 9];
const k = 15;
console.log(longestSubarrayWithSumK(arr, k));
