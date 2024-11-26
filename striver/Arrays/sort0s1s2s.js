//Dutch National Flag algorithm

const sort = (arr) => {
    let low = 0,
        mid = 0,
        high = arr.length - 1;
    for (let i = 0; i < arr.length - 1; i++) {
        while (mid <= high) {
            if (arr[mid] === 0) {
                [arr[low], arr[mid]] = [arr[mid], arr[low]]
                low++;
                mid++
            }
            else if (arr[mid] === 1) {
                mid++
            } else {
                [arr[high], arr[mid]] = [arr[mid], arr[high]];
                high--
            }
        }
    }
    return arr
}

console.log(sort([1, 0, 2, 0, 2, 1, 0, 0, 1]))
