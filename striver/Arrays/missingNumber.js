const missingNumber = (arr, num) => {
    let result = [];
    let set = new Set(arr);
    for (let i = 1; i < num; i++) {
        if (!set.has(i)) {
            result.push(i)
        }
    }
    return Array.from(result)
}
console.log(missingNumber([1, 2, 2, 5, 9], 9));
