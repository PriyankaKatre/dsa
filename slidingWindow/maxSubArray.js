const maxSubArray = (arr) => {
    let start = 0;
    let end = 0;
    let sum = 0;
    while (end < arr.length) {
        sum += arr[end]
    }

}
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
