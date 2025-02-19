const leftRotateArrayBy1Place = (arr) => {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i]
    }
    arr[arr.length - 1] = temp;
    return arr
}

console.log(leftRotateArrayBy1Place([1, 2, 3, 4, 5]));
