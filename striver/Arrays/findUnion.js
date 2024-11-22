const union = (arr1, arr2) => {
    let map = new Map();
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!map.has(arr1[i])) {
            map.set(arr1[i], 1)
            result.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (!map.has(arr2[i])) {
          map.set(arr2[i], 1);
          result.push(arr2[i]);
      }
    }
    return result;
}
let arr1 = [1, 2, 3, 3, 4, 5]
let arr2 = [2, 2, 3, 4, 5, 6]
console.log(union(arr1, arr2))
