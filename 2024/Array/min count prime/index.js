// const isPrime = (num) => {
//     if (num <= 1) {
//         return false
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }


// function minCountPrime(N) {
//     let minCount;
//     if (isPrime(N)) {
//         minCount = 1;
//     } else if (N % 2 === 0) {
//         minCount = 2;
//     } else {
//         if (isPrime(N - 2)) {
//             minCount = 2;
//         } else {
//             minCount = 3;
//         }
//     }
//     return minCount;
// }

// console.log(minCountPrime(21))


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generatePrimes(M) {
    const primes = [];
    let num = 2;
    while (primes.length < M) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

function minPrimesToMakeN(N, M) {
    const primes = generatePrimes(M);
    console.log('primes', primes)
    const dp = new Array(N + 1).fill(Infinity);
    dp[0] = 0;
console.log('dp', dp)
    for (let i = 1; i <= N; i++) {
        for (const prime of primes) {
            if (i >= prime) {
                dp[i] = Math.min(dp[i], dp[i - prime] + 1);
            }
        }
    }

    return dp[N];
}

const N = 11;
const M = 3;
const result = minPrimesToMakeN(N, M);
console.log(`Minimum number of primes to make ${N}: ${result}`);
