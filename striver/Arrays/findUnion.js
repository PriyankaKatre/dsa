const union = (arr1, arr2) => {
    let map = new Map();
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!map.has(arr1[i])) {
            map.set(arr1[i], 1)
        }
    }

    for (let i = 0; i < arr2.length; i++) {
      if (!map.has(arr2[i])) {
          map.set(arr2[i], 1);
      }
    }

    for (let [key, val] of map) {
        result.push(key)
    }
    return result;
}
let arr1 = [1, 2, 3, 3, 4, 5]
let arr2 = [2, 2, 3, 4, 5, 6, 8, 9]
console.log(union(arr1, arr2))
