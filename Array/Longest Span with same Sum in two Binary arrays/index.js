const longestCommonSum = (arr1, arr2) => {
    let maxLen = 0;
    for (let i = 0; i < arr1.length; i++) {
        let sum1 = 0; let sum2 = 0;
        console.log('i', i)
        for (let j = i; j < arr2.length; j++) {
            sum1 += arr1[j] //
            sum2 += arr2[j]
            console.log('sum1', sum1)
            if (sum1 === sum2) {
                let len = j - i + 1
                if (len > maxLen) {
                    maxLen = len
                }
            }
        }
    }
    return maxLen;
}

console.log(longestCommonSum(
    [0, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1]))
