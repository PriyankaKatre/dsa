const stockBuySell = (arr) => {
    let buy = arr[0], max = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < buy) {
            buy = arr[i]
        }
        else {
            let profit = arr[i] - buy;
            max = Math.max(max, profit);
        }
    }
    return max
}
console.log(stockBuySell([7, 1, 5, 3, 6, 4]));
