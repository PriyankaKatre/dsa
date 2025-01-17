const maxSum = (arr) => {
    let sum= 0, max = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        max = Math.max(max, sum)
        if (sum < 0) {
            sum= 0
        }
    }
    return max
}
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
