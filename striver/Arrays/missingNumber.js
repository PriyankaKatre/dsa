const missingNumber = (arr, num) => {
    for (let i = 0; i < num; i++) {
        if (arr[i] !== i+1) {
            return i+1
        }
    }
    return -1
}
console.log(missingNumber([1, 2, 3, 5], 5));
