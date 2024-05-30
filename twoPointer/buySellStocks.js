const maxProfit = (arr) => {
    let max = 0;
    let left = 0, right = 1

    while (right < arr.length) {
        if (arr[left] > arr[right]) {
            left = right
        }
        const profit = arr[right] - arr[left]
        max = Math.max(max, profit)
        right++
    }
    return max
}
console.log(maxProfit([5, 7, 1, 3, 7, 4 ]))
