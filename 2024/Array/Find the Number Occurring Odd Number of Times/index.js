const getOddOccurrence = (arr) => {
    const obj = {}
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = ++obj[arr[i]] || 1
    }
    Object.keys(obj).map((key) => {
        if (!(obj[key] % 2 === 0)) {
            result.push(key)
        }
    })
}

console.log(getOddOccurrence([1, 2, 3, 4, 5, 1, 2, 3, 3,3, 3, 4, 6, 5, 5]))
