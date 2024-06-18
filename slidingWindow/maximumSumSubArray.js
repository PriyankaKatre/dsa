const maxSumArray = (arr, size) => {
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < size; i++) {
        maxSum = (maxSum + arr[i])
    }
    tempSum = maxSum;
    for (let i = size; i < arr.length; i++) {
        tempSum = (tempSum - arr[i - size] + arr[i]);
        maxSum = Math.max(maxSum, tempSum)
    }
}


maxSumArray([1, 12, -5, -6, 50, 3], 4)
