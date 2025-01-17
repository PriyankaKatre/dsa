const lastOccurenceInSortedArray = (arr, k) => {
    let result= -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === k) {
            result = i; break;
        }
    }
    return result
}

console.log(lastOccurenceInSortedArray([3, 4, 13, 13, 13, 20, 40], 60));
