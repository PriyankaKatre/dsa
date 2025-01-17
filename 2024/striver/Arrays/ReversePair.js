const reversePair = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > 2 * arr[j]) {
                count = count+1
            }
        }
    }
    return count
}
console.log(reversePair([1, 3, 2, 3, 1])); 
console.log(reversePair([3, 2, 1, 4]));
