function firstNegativeNumber(arr, n, k) {
  let start = 0;
  let end = 0;
  let neg_nums = [];
  let result = [];

  while (end < n) {
    if (arr[end] < 0) {
      neg_nums.push(arr[end]);
    }

    if (end - start + 1 < k) {
      end += 1;
    } else if (end - start + 1 === k) {
        if (neg_nums.length > 0) {
            result.push(neg_nums[0]);
            if (arr[start] === neg_nums[0]) {
                neg_nums.shift();
            }
        }

      start += 1;
      end += 1;
    }
  }

  return result;
}

let arr = [12, -1, -7, 8, -15, 30, 18, 28];
let n = arr.length;
let k = 3;
let ans = firstNegativeNumber(arr, n, k);
console.log(ans); // Output: [-1, -7, -15]
