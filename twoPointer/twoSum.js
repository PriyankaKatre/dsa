// nums = [2,7,11,15], target = 9

// const twoSum = function (nums, target) {
//   const map = new Map();
//   let pairTarget;

//     for (const index in nums) {

//       pairTarget = target - nums[index];

//         if (map.has(pairTarget)) {
//         return [index, map.get(pairTarget)];
//         }
//         map.set(nums[index], index);
//   }
// };

// console.log(twoSum(nums, target))

// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109


// Using 2 sum
// const twoSum1 = (arr, target) => {
//     const sortedArr = arr.sort((a, b) => a - b);

//     if (sortedArr === null || sortedArr.length < 1) return [];
//         let left = 0;
//         let right = sortedArr.length - 1;
//         while (left <= right) {
//             let sum = sortedArr[left] + sortedArr[right];
//             if (sum === target) {
//                 return [arr[left], arr[right]];
//             } else if (sum > target) {
//                 right--;
//             } else {
//                 left++;
//             }
//         }

//     return [];
// }
// console.log(twoSum1([2, 7, 11, 15, 1, 6], 9))


//revision
const twoSumRevision = (arr, target) => {
    let sortedArray = [...arr].sort((a, b) => a - b);
    if (sortedArray === null || sortedArray.length < 1) return [];
    let left = 0;
    let right = arr.length - 1;
    let result = [];
    while (left < right) {
        let sum = sortedArray[left] + sortedArray[right];
        if (sum === target) {
            result.push([left, right]); // Push an array with both indices
            right--;
            left++;
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }

    return result;
};

console.log(twoSumRevision([2, 7, 11, 15, 1, 6, 3], 9));
