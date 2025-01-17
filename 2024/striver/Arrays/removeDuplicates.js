//using 2 pointer

// const removeDuplicate = (arr) => {
//     let sortArray = arr.sort((a, b) => a - b);
//     if (arr.length < 1) return;
//     let j = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (sortArray[i] !== sortArray[j]) {
//             j++;
//             sortArray[j] = sortArray[i]
//         }
//     }
//     return sortArray.slice(0, j)
// }

// console.log(removeDuplicate([1, 2, 3, 3, 4, 5]))


//Frequency counter

let removeDuplicates = (arr) => {
    let map = new Map();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) +1)
        }
    }
    for (let [key, value] of map) {
        if (key < 0) {
            continue
        }
        else {
            result.push(key)
        }
    }
    return result
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 5, -6, -8]));
