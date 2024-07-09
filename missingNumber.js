const missingNumber = (arr) => {
    let count = 8;
    let missingNumbers = []

    for (let i = 0; i < count; i++) {
        !arr.includes(i) ? missingNumbers.push(i) : ''
    }

    return missingNumbers
}

console.log(missingNumber([2, 4, 1, 3, 7, 8]))
