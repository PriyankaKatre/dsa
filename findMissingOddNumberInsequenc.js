const array = [5, 7, 9, 11, 17]

const findMissingNum = (arr) => {
    let missingNum;

    for (let [index, val] of arr.entries()) {
        if (arr[ index + 1] !== val + 2) {
            console.log(val + 2);
            break
        }

    }
    return missingNum
}

console.log(findMissingNum(array));
