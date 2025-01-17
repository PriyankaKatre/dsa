const missingNumber = (arr) => {
    const result = [];
    for (let i = 1; i < 10; i++) {
        if (arr.indexOf(i) === -1) {
            result.push(i)
        }
    }
    return result
}

console.log(missingNumber([1, 3, 6, 9, 10]))

const findMissing = (arr, startFromOne = true) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const missing = [];
    const startValue = startFromOne ? 1 : min;

    for (let i = startValue; i <= max; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }

    return missing;
};

console.log(findMissing([2, 5, 9])); // [3, 4, 6, 7, 8]
console.log(findMissing([2, 5, 9], false)); // [1, 3, 4, 6, 7, 8]
