const reverseArray = (num, arr) => {
    if (arr.length === 0) return;
    let start = 0;
    let end = num - 1;
    while (start < end) {
        [arr[end], arr[start]] = [arr[start], arr[end]];
        start++ , end--
    }
console.log(arr)
}
console.log(reverseArray(5, [1, 2, 3, 4, 5]));
