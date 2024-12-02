const majorityElement = (arr, n) => {
    let map = {};
    let result =[];
    for (let i = 0; i < n; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1
        } else {
            map[arr[i]]++
        }
    }
    for (let key of Object.keys(map)) {
        if (map[key] > n / 3) {
            result.push(+key)
        }
    }
    return result
}

console.log(majorityElement([1, 2, 2, 3, 2], 5));
