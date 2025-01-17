const majorityElement = (arr, n) => {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1
        }
        else {
            map[arr[i]]++
        }
    }

    for (let key of Object.keys(map)) {
        if (map[key] > n / 2) {
            return +key
        }
    }
    console.log(map)
}

console.log(majorityElement([3, 2, 3], 3));
