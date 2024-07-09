const majorityElement = (arr) => {
    const obj = {};
    let majorityCheck = arr.length/2
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = ++obj[arr[i]] || 1
    }
    const result = Object.keys(obj).find((key) => {
        if (obj[key] >= majorityCheck) {
            return key
        }
    })
    return result || 'none'
}
console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]))
