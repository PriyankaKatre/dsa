const LargestSubarrayofsumK = (arr, k) => {
    let left = 0, right = 0;
    let result = 0, sum = 0;
    while (right < arr.length) {
        sum += arr[right];

        while (sum > k && left <= right) {
            sum -= arr[left];
            left++
        }

        if (sum === k) {
            result = Math.max(result, right - left + 1);
        }
        right++
    }
    return result
}
console.log(LargestSubarrayofsumK([4, 1, 1, 1,1,1, 3, 5], 5));
