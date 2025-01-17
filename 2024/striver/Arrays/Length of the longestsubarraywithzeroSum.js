const LengthofthelongestsubarraywithzeroSum = (arr, k) => {
    let left = 0;
    let right = 0;
    let max
    while (right < arr.length) {
        let sum = arr[right];
        while (sum > k && left <= right) {
            sum -= arr[left];
            left++
        }
      if (sum === k) {
        max = Math.max(max, right - left + 1);
        return max;
      }
        right++
    }

}
console.log(LengthofthelongestsubarraywithzeroSum([3, 1, 2, 4], 6));
