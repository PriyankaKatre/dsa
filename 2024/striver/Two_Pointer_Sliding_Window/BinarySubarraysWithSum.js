const BinarySubarraysWithSum = (arr, k) => {
    let left = 0, right = 0, sum = 0, count = 0;
    while (right < arr.length) {
        for (let el of arr) {
          sum += el;

            if (sum > k) {
                sum = sum - [arr[left]];
                left++;
            }
            count = count + (right - left + 1);
            right++;
        }

    }
    return count
}

console.log(BinarySubarraysWithSum([1, 0, 0, 1, 1, 0], 2));

