const Maximumofallsubarraysofsizek = (arr, k) => {
    let result = [];
    let left = 0;
    let right = 0;
    let maxNum = 0;
    if (k > arr.length) {
      return [];
    }
    while (right < arr.length) {
        if (right - left + 1 === k) {
            maxNum = Math.max(...arr.slice(left, right+1));
            result.push(maxNum);
            left++
        }
        right++
    }
    return result;
}

console.log(Maximumofallsubarraysofsizek([1, 3, -1, -3, 5, 3, 6, 7], 3));
