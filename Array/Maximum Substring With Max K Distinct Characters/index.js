let KDistinct = (str, k) => {
    str = str.split('')
    let left = 0;
    let maxString = 0;
    let map = new Map();
    let n = str.length
    for(let right = 0; right < n; right++) {
        if (!map.has(str[right])) {
            map.set(str[right], 1)
        }
        else {
            map.set(str[right], map.get(str[right]) + 1)
        }

        while (map.size > k && left <= right) {
            if (map.get(str[left]) <= 1) {
                map.delete(str[left])
            } else {
                map.set(str[left], map.get(str[left] -1))
            }
            left++
        }
        maxString += right-left+1
    }
    return map
}

console.log(KDistinct('mkmmap', 2))
