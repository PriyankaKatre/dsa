const threeSum = (arr) => {
  let nums = arr.sort((a, b) => a - b);
  const n = nums.length;
  let output = [];
  if (arr === null || arr.length < 3) return [];
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        output.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return output;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
