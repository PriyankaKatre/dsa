const roateArrayBYKElements = (arr, k) => {
    k = k % arr.length;
    console.log(2%8)
    if (k === 0) return arr;
    let temp = arr.splice(arr.length - k, k);
    arr.unshift(...temp);
}

console.log(roateArrayBYKElements([1, 2, 3, 4, 5, 6, 7], 2));
