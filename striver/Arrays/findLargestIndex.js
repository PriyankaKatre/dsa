function longestZeroSumSubarray(arr) {
    let map = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum === 0) {
            maxLen = Math.max(maxLen, i+1)
        }
        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    return maxLen;
}
const arr = [1, 2, -2, 4, -4];
console.log(longestZeroSumSubarray(arr)); 
