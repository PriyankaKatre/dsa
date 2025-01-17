// const countOfSum = (num) => {
//     let sum = 0
//     let count = 0;
//     for (let start = 0; start <= num; start++) {
//         let end = start + 1
//         sum = start + end
//         while (sum < num) {
//             end += 1
//             sum += end
//             console.log('sum', sum)
//             if (sum === num) {
//                 count+=1
//             }
//         }
//     }
//     return count
// }
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// console.log('countOfSum', countOfSum(15))



function createPrefixSumArray(arr) {
    const prefixSum = new Array(arr.length);
    prefixSum[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    return prefixSum;
}

function rangeSumQuery(prefixSum, i, j) {
    if (i === 0) return prefixSum[j];
    return prefixSum[j] - prefixSum[i - 1];
}

// Example usage:
const N = 15;
const prefixSumArray = createPrefixSumArray([...Array(N).keys()].map(x => x + 1));
const result = rangeSumQuery(prefixSumArray, 0, prefixSumArray.length - 1);
console.log(`Number of ways to represent ${N} as a sum of consecutive natural numbers: ${result}`);
