const findLowerBound = (arr, k) => {
    let start = 0;
    let end = arr.length - 1;
    let lb;
    for (let i = 0; i < arr.length - 1; i++) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] >= k) {
            lb = mid;
            end= mid-1
        } else  {
            start =mid+1
        }
    }
    return lb
}
console.log(findLowerBound([3, 5, 8, 15, 19], 9));
