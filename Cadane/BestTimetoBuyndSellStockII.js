const Array = [7, 2, 4, 5, 1, 3, 6]

const BestTimetoBuyndSellStockII = (arr) => {
    let profit = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            profit += arr[i] -arr[i-1]
        }
    }
    return profit
}

console.log(BestTimetoBuyndSellStockII(Array))
