const rotetedSortedArray = (arr, k) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        //console.log(mid)
        if (arr[mid] === k) return mid;
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= k && k <= arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (arr[mid] <= k && k <= arr[right]) {
                left = mid + 1
            } else {
                right = mid-1
            }
        }
    }
    return -1
}

console.log(rotetedSortedArray([4, 5, 6, 7, 0, 1, 2, 3], 0));
