const arr = [1, 2, 3, 3, 4, 2, 1, 5, 6]

const removeDuplicate = (arr) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], 1);
    }
    return [...map.keys()];
}

console.log(removeDuplicate(arr));
