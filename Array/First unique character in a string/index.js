let firstUniqueChar = (str, k) => {
    str = str.split('')
    let map = new Map();
    let n = str.length
    for(let right = 0; right < n; right++) {
        if (!map.has(str[right])) {
            map.set(str[right], 1)
        }
        else {
            map.set(str[right], map.get(str[right]) + 1)
        }

    }
    for (const [key, value] of map) {
        if (value === 1) {
            return str.indexOf(key)
        }
    }
    return  -1

}

console.log(firstUniqueChar('mkmmap', 2))
