const findXInsortedArray = (arr, t) => {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
         let mid = Math.floor((start + end) / 2);
        if (arr[mid] === t) {
            return mid
        } else if (arr[mid] > t) {
            end = mid - 1
        } else {
            start = mid+1
        }
    }
    return -1
}
console.log(findXInsortedArray([3, 4, 5, 6, 9, 12, 16, 17], 6));
