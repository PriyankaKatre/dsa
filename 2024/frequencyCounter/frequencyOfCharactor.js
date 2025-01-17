const string = 'this is a string to test'

const countFrequency = (str) => {
    let map = new Map()
    for (let val of str) {
        //map.set(val, (map.get(val) || 0) +1)

        if (map.has(val)) {
            map.set(val, map.get(val) + 1)
        }
        else {
            map.set(val, 1)
        }
    }
    let maxCount = 0;
    let maxKey;
    for(let [key, val] of map) {
        if (val > maxCount) {
            maxCount = val
            maxKey = key
        }
    }
    //return map.size
    return { map, maxCount, maxKey };
}

console.log(countFrequency(string))
