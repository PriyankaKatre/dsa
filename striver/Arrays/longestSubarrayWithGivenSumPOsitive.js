const longestSubArrayPositive = (arr, k) => {
    // let j = 0;
    // let sum = 0;
    // let max= 0
    // for (let i = 0; i < arr.length; i++) {
    //     sum = sum + arr[i]
    //     while (sum > k) {
    //         sum = sum - arr[j];
    //         j++
    //     }
    //     if (sum === k) {
    //         max = Math.max(max, i-j+1)
    //     }
    // }
    // return max

    let j = 0, sum = 0, max = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum > k) {
            sum = sum - arr[j];
            j++
        } else if (sum === k) {
            max=  Math.max(max, i-j+1)
        }
    }
    return max
}
console.log(longestSubArrayPositive([-1, 1, 1], 1));
