const countSubarraysWithAtMostK = (arr, k) => {
  let left = 0,
    count = 0,
    map = new Map();
  for (let right = 0; right < arr.length; right++) {
    if (map.has(arr[right])) {
      map.set(arr[right], map.get(arr[right]) + 1);
    } else {
      map.set(arr[right], 1);
    }

    while (map.size > k) {
      map.set(arr[left], map.get(arr[left]) - 1);
      if (map.get(arr[left]) === 0) {
        map.delete(arr[left]);
      }
      left++;
    }

    count += right - left + 1;
  }
  return count;
};

const Subarraywithkdifferentintegers = (arr, k) => {
  return (
    countSubarraysWithAtMostK(arr, k) - countSubarraysWithAtMostK(arr, k - 1)
  );
};

console.log(Subarraywithkdifferentintegers([1, 2, 1, 3, 4], 3)); // Output: 3
