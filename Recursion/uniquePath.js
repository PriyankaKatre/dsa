const uniquePath = (m , n) => {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    console.log('dp', dp)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) dp[i][j] = 1;
            else dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m-1][n-1]
}
console.log(uniquePath(1, 3))
