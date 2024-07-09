const uniquePath = (m , n) => {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) dp[i][j] = 1;
            else dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            console.log(dp)
            console.log([i - 1][j])
            console.log(i, j)
        }
    }

    return dp[m-1][n-1]
}
console.log(uniquePath(2, 2))
