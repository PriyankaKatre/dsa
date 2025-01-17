const floorCeil = (arr, k) => {
    let n = arr.length, start = 0, end = n - 1, floor =-1 , ceil=-1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === k) {
            floor = arr[mid]
            ceil = arr[mid];
            break
        } else if (arr[mid] > k) {
            ceil = arr[mid];
            end = mid - 1
        }
        else {
            floor = arr[mid];
            start = mid + 1
        }
    }
    return {floor, ceil}

}

console.log(floorCeil([3, 4, 4, 7, 8, 10], 5));
