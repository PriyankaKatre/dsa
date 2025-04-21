const Array = [7, 2, 4, 5, 1, 3, 6]
const buySellStocks = (arr) => {
    // Nive Approach
    let buy_price = arr[0];
    let profit = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < buy_price) {
            buy_price = arr[i]
        }
        else {
            let current_profit = arr[i] - buy_price
            profit = Math.max(current_profit, profit)
        }
    }
    return profit;
}

    
    //Brute force approach
    let maxProfit = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let profit = arr[j] - arr[i]
            if (profit > maxProfit) {
                console.log(i, j)
                maxProfit = profit
            }
        }
    }
    return maxProfit;

}

console.log(buySellStocks(Array));
