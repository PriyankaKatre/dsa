const moveZeros = (arr) => {
    let left = 0;
    let right = 0;
    while (right < arr.length - 1) {
        if (arr[right] !== 0) {
            console.log('left', left);
            console.log('right', right);
            [arr[left], arr[right]] = [arr[right], arr[left]];
            //console.log(arr)
            left++
        }
        right++
    }
    return arr;
}

console.log(moveZeros([1, 0, 0, 9 ,0 ,0, 8, 13, 0]))
