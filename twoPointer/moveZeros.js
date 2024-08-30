const moveZeros = (arr) => {
    let left = 0;
    let right = 0;
    while (right < arr.length - 1) {
        if (arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++
        }
        right++
    }
    return arr;
}

console.log(moveZeros([1, 0, 0, 9 ,0 ,0, 8, 13, 0]))
