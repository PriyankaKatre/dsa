function fourSum(nums, target) {
  let n = nums.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let hashset = new Set();
      for (let k = j + 1; k < n; k++) {
        let sum = nums[i] + nums[j];
        sum += nums[k];
        let fourth = target - sum;
        if (hashset.has(fourth)) {
          let temp = [nums[i], nums[j], nums[k], fourth];
          result.push(temp.sort((a,b) => a-b))
        }
        hashset.add(nums[k]);
      }
    }
  }

  let ans = [...new Set(result.map(JSON.stringify))].map(JSON.parse);
  return ans;
}
console.log(fourSum([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9));
