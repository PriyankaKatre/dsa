// const numberAppearsOnes = (nums) => {
//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!map[nums[i]]) {
//       map[nums[i]] = 1;
//     } else {
//       map[nums[i]]++;
//     }
//   }
//     for (let [key] of Object.keys(map)) {
//         if (map[key] === 1) {
//             return key
//         }
//     }
//     return -1
// };
// console.log(numberAppearsOnes([1, 1, 2, 2, 3]));

var singleNonDuplicate = function(nums) {
    let xOr = 0

    for (let i = 0; i < nums.length; i++) {
        xOr = xOr ^ nums[i]
        console.log("xOr", xOr ^ nums[i]);
    }
    return xOr;
};

console.log(singleNonDuplicate([1, 1, 2, 2, 6,3, 3, 9, 9, 7, 7])); // Output: 2

