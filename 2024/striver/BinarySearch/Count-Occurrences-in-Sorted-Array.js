const countOccurenceInSortedArray = (arr, k) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            count++
        }
    }
    return count
}

console.log(countOccurenceInSortedArray([2, 2, 3, 3, 3, 3, 4], 3));
