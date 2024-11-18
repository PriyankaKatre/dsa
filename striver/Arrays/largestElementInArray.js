const largestElement = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(largestElement([1, 2, 5, 8, 9, 67, 89, 45]));
