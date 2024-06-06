const threeSum = (arr) => {
    let result = [];
    const sortedArr = arr.sort((a, b) => a - b);
    if (arr === null || arr.length < 3) return [];
    for (let i = 0; i < sortedArr.length - 2; i++) {
        let j = i + 1;
        let k = sortedArr.length - 1
        while (j < k) {
            let sum = sortedArr[i] + sortedArr[j] + sortedArr[k];
            if (sum === 0) {
                result.push([sortedArr[i], sortedArr[j], sortedArr[k]]);
                j++;
                k--
            } else if (sum < 0) {
                j++
            }
            else {
                k--
            }
        }
    }
    const uniqueArray = [... new Set(result.map(JSON.stringify))].map(JSON.parse)
    return uniqueArray;
}


console.log(threeSum([-1,0,1,2,-1,-4]))
