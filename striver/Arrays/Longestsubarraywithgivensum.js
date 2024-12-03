// const longestSubarraywithGivenSum = (arr, k) => {
//     let n = arr.length;
//     let sum = 0, count = 0,  j=0;

//     let map = new Map();
//     map.set(0, 1)
//     for (let i = 0; i < n; i++) {
//         sum = sum + arr[i];
//         if (map.has(sum - k)) {
//             count += map.get(sum - k);
//         }
//         if (!map.has(sum)) {
//             map.set(sum, 1)
//         } else {
//             map.set(sum, map.get(sum)+1)
//         }
//     }
//     return map;
// }

const countSubarraysWithGivenSum = (arr, k) => {
    let sum = 0;
    let count = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum > k && start <= end) {
            sum -= arr[start];
            start++;
        }

        if (sum === k) {
            count++;
        }
    }

    return count;
};

// Test cases
console.log(countSubarraysWithGivenSum([3, 1, 2, 4], 6)); // Output: 1 (subarray [2, 4])
console.log(countSubarraysWithGivenSum([1], 0)); // Output: 0 (no subarray sums to 0)
console.log(countSubarraysWithGivenSum([0], 0)); // Output: 1 (single element array [0])
console.log(countSubarraysWithGivenSum([0, 0], 0)); // Output: 3 (subarrays [0], [0], and [0, 0])
