//optimize approach
const findAllPairTarget = (arr1, arr2, target) => {
    const result = [];

    let arr2set = new Set();
    for (let i = 0; i < arr2.length; i++) {
        arr2set.add(arr2[i])
    }
    for (let i = 0; i < arr1.length; i++) {
        let targetPair = target - arr1[i];
        if (arr2set.has(targetPair)) {
            result.push([arr1[i], targetPair])
        }
    }
    result.sort((a, b) => a[0] - b[0])

    for(let pair of result) {
       console.log(pair)
    }

}

findAllPairTarget([2, 4, 5, 7, 1], [5, 6, 6, 3, 4, 8], 9);


//brute force approach

const findAllPair = (arr1, arr2, target) => {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] + arr2[j] === target) {
                result.push([arr1[i], arr2[j]])
            }
        }
    }
    result.sort((a, b) => a[0] - b[0])
    return result
}

const pairs = findAllPair([2, 4, 5, 7, 1], [5, 6, 3, 4, 8], 9)
for (const pair of pairs) {
    console.log(pair);
}
