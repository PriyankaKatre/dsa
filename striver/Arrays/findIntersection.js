var intersection = function (nums1, nums2) {
  let set = new Set(nums1);

  let result = [];
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      result.push(nums2[i]);
      set.delete(nums2[i]);
    }
  }
  return result;
};

let arr1 = [1, 2, 3, 3, 4, 5];
let arr2 = [2, 2, 3, 4, 5, 6];
console.log(intersection(arr1, arr2));
