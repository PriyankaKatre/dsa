const upperBound = (arr, k) => {
    let start = 0, end = arr.length - 1, upperBound;
    for (let i = 0; i < arr.length; i++) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] > k) {
            upperBound = mid
            end = mid-1
        } else {
            start= mid+1
        }
    }
    return upperBound;
}


console.log(upperBound([1, 2, 2, 3], 2));
//Find lowest 
