const searchInsertPosition = (arr, target) => {
    let left = 0,
      n = arr.length;
      right = n -1,
      result = n;
    for (let i = 0; i < n; i++) {
        let mid = Math.floor((left + right) / 2);
        console.log('mid', mid)
        if (arr[mid] >= target) {
            result = mid
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result
}

console.log(searchInsertPosition([1, 2, 4, 7], 6));
