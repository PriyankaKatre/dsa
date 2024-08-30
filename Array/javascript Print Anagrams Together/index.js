const printAnagram = (arr) => {
    let map = new Map();

    for (let val of arr) {
        let sortedVal = val.toLowerCase().split('').sort().join('');
        if (!map.has(sortedVal)) {
            map.set(sortedVal, [val])
        }
        else {
            map.get(sortedVal).push(val)
        }
    }
    console.log('map', map)
    for (let [key, val] of map) {
        let formatted = val.join(', ')
        console.log(`${key} :`, formatted)
    }
}
console.log(printAnagram(['monk', 'konm', 'bbc', 'cbb', 'dell', 'ledl']))
