const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
        } else {
            return false
        }
    }
    return true
}
console.log(isSorted([1, 2, 2, 3, 5, 4, 5, 6]))

const removeDuplicate = (arr) => {
    let sortedArray = arr.filter((item) => item > 0).sort((a,b) => a-b)
    let j = 0;
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] !== sortedArray[j]) {
            j++;
            sortedArray[j] = sortedArray[i]
        }
    }
    return sortedArray.slice(0, j+1)
}
console.log(removeDuplicate([1, 2, 2, 3, 7, 5, 4, 5, 6, -2. -3]))
