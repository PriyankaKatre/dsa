
const findRepeatingAndMissingNumbers = (arr) => {
    let map = new Map();
    let result = []
    let sortedArray = arr.sort((a, b) => a - b);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (!map.has(sortedArray[i])) {
            map.set(sortedArray[i], 1)
        } else {
            map.set(sortedArray[i], map.get(sortedArray[i])+1)
        }

    }
    let repeating, missing;
    for (let i = 1; i <= n; i++) {
      if (map.has(i)) {
        if (map.get(i) > 1) {
          repeating = i;
        }
      } else {
        missing = i;
      }
    }
    result.push(repeating);
    result.push(missing);
    return result;
}

console.log(findRepeatingAndMissingNumbers([3, 2, 3, 5, 6]));
