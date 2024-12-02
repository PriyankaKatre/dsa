const LengthofthelongestsubarraywithzeroSum = (arr) => {
    let left = 0;
    let right = 0;
    let max
    while (right < arr.length) {
        let sum = arr[right];
        while (sum > 0 && left <= right) {
            sum -= arr[left];
            left++
        }
      if (sum === 0) {
        max = Math.max(max, right - left + 1);
        return max;
      }
        right++
    }

}
console.log(LengthofthelongestsubarraywithzeroSum([9, -3, 3, -1, 6, -5]));
