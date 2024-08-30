const countPairsDivisableByK = (arr, k) => {
    let count = [];
    let sortedArr = arr.sort((a, b) => a - b)
    console.log('sortedArr', sortedArr)

    let start = 0;
    let end = arr.length - 1
    while (start < end) {
        let divisibleByK = (start +end) % k === 0
        if (divisibleByK) {
            count.push(arr[start], arr[end]);
            
        }
    }
}

console.log(countPairsDivisableByK([2, 2, 1, 7, 5, 3], 4))
