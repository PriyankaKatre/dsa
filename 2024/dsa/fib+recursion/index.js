const fib_recursion = (n, memo=[]) => {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fib_recursion(n - 1, memo) + fib_recursion(n - 2, memo);
    console.log(res)
    memo[n] = res;
    return res;
}

const fib_table = (n) => {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums
}
