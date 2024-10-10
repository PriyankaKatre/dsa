const pickToys = (arr, k) => {
  let left = 0,
    right = 0,
    result = 0,
    map = new Map();

  while (right < arr.length) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);
    while (map.size > k) {
      map.set(arr[left], map.get(arr[left]) - 1);
      if (map.get(arr[left]) === 0) {
        map.delete(arr[left]);
      }
      left++;
    }
    result = Math.max(result, right - left + 1);
    right++;
  }
  return result;
};
console.log(pickToys(["a", "b", "a", "c", "c", "a", "b"], 2));
