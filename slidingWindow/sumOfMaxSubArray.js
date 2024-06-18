const arr = [2, 1, 9, 2, 1, 8, 5, 6, 3]
const num = 3



// const newMaxSubArray = (arr, num) => {
//     const sliderArray = [];
//     for (let i = 0; i < arr.length -num +1; i++) {
//         sliderArray.push((Math.max(arr[i], arr[i+1], arr[i+2])))
//     }
//     console.log(sliderArray)
// }

// newMaxSubArray(arr, num)



const sumOfMaxSubArray = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;

    //let max = 0;
    if (num > arr.length) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
        //max = Math.max(max, arr[i])
    }

    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

console.log(sumOfMaxSubArray([2, 1, 9, 2, 1, 8, 5, 6, 3], 3))
