const searchInARotatedSortedArrayII = (arr, k) => {
    let low = 0, heigh = arr.length - 1;
    while (low <= heigh) {
        let mid = Math.floor((low + heigh) / 2);
        if(arr[mid] === k) return true
        if (arr[low] === arr[mid] && arr[mid] === arr[heigh]) {
            low++;
            heigh--;
            continue;
        }
        if (arr[low] <= arr[mid]) {
            if (arr[low] <= k && k <= arr[mid]) {
                heigh = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            if (arr[mid] <= k && k <= arr[heigh]) {
                low = mid + 1
            } else {
                heigh = mid-1
            }
        }
    }
    return false
}
console.log(searchInARotatedSortedArrayII([7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 3));
