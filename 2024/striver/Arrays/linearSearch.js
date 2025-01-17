const findAnElementPresentInAnArray = (arr, el) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return i
        }
    }
    return -1
}

console.log(findAnElementPresentInAnArray([1, 2, 3, 4, 5,], 5));
