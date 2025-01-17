const topK = (arr, k) => {
    let map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    const sortedmap = Array.from(map.entries()).sort((a, b) => b[1] - a[1]).map((val) => val[0])

    console.log(sortedmap.slice(0 , k))
}

console.log(topK([1, 2, 3, 1, 2, 3, 4, 5, 1, 3, 4, 4, 4,5], 2))
