const longestSubarraywithGivenSum = (arr, k) => {
    let n = arr.length;
    let  sum = 0, count = 0;

    let map = new Map();
    map.set(0, 1)
    for (let i = 0; i < n; i++) {
        sum = sum + arr[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        if (!map.has(sum)) {
            map.set(sum, 1)
        } else {
            map.set(sum, map.get(sum)+1)
        }
    }
    return count;
}
console.log(longestSubarraywithGivenSum([3, 1, 2, 4], 6));
console.log(longestSubarraywithGivenSum([1], 0));  // Output: 0 (no subarray sums to 0)
console.log(longestSubarraywithGivenSum([0], 0));  // Output: 1 (single element array [0])
console.log(longestSubarraywithGivenSum([0, 0], 0));  // Output: 3 (subarrays [0], [0], [0, 0])
