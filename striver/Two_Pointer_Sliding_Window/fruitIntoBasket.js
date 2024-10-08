const fruitIntoBasket = (arr) => {
    let left = 0, right = 0, maxLength = 0;
    let map = new Map();
    while (right < arr.length) {
        if (map.has(arr[right])) {
            map.set(arr[right], map.get(arr[right]) + 1);
        }
        else {
            map.set(arr[right], 1);
        }
        if (map.size > 2) {
            map.set(arr[left], map.get(arr[left]) - 1);
            if (map.get(arr[left]) === 0) {
                map.delete(arr[left])
            }
            left++
        }
        if (map.size <= 2) {
           maxLength = Math.max(maxLength, right - left + 1)
        }
        right++
    }
    return { map, maxLength };
}
//console.log(fruitIntoBasket([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
console.log(fruitIntoBasket('aaabbccd'));
