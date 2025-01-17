// var getMinDistance = function (nums, target, start) {
//     let output = Infinity;
//     for (let index = 0; index < nums.length; index++) {
//         if (nums[index] === target) {
//             output = Math.min(output, Math.abs(index - start));
//         }
//     }
//     return output;
// };

// console.log(getMinDistance([3, 4, 2, 5], 5 , 3))


function minDistOptimized(arr, x, y) {
    let minDistance = Infinity;
    let prevIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x || arr[i] === y) {
            if (prevIndex !== -1 && arr[i] !== arr[prevIndex]) {
                minDistance = Math.min(minDistance, i - prevIndex);
            }
            prevIndex = i; 1
        }
    }
    return minDistance === Infinity ? -1 : minDistance;
}

console.log(minDistOptimized([3, 4, 2, 5], 4, 5));
