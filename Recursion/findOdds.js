//Depth First Recursive // Graph Data Structure
// using helper method recursion


// let findOdds = (numArray) => {
//     const result = [];
//     const add = (arr) => {
//         if (arr.length === 0) {
//             return;
//         }
//         if (arr[0] % 2 !== 0) {
//             result.push(arr[0])
//         }
//         add(arr.slice(1))
//     }
//     add(numArray)
//     return result
// }

// console.log(findOdds([1, 2, 3, 4, 5, 6,7, 8, 9, 10 , 11, 12, 13, 14, 15 ,16, 17]))

let findOdds = (arr) => {
    let result = [];

        if (arr.length === 0) {
            return;
        }
        if (arr[0] % 2 !== 0) {
            result.push(arr[0])
        }
        result = result.concat(findOdds(arr.slice(1)))

    return result
}

console.log(findOdds([1, 2, 3, 4, 5, 6,7, 8, 9, 10 , 11, 12, 13, 14, 15 ,16, 17]))
