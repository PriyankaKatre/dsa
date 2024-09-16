const arr = [-1, -2, 4, 5, 8, 9, -3, -4];
const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const arr3 = [-2, 7, -3, 4];


const sumOfMaxSubArray = (arr) => {
    let sum = 0;
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max
}
console.log(sumOfMaxSubArray(arr2))


// const obj = {
//     helloWorld: function () {
//         console.log(this.name)
//         return "Hello World" + this.name;
//     },
//     name: 'priyanka'
// }

// const obj2 = {
//     helloWorld: obj.helloWorld,
//     name: 'bye'
// }
// console.log(obj2.helloWorld.call(obj))


// const cadens = (arr) => {
//     let sum = 0;
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         if (sum > max) {
//             max = sum;
//         }
//         if (sum < 0) {
//             sum = 0
//         }
//     }
//     return max
// }

// console.log(cadens(arr3))
