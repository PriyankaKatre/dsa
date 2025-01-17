 const arr = [];

const addNum = (num) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] < num) {
            left = mid + 1
        } else {
            right = mid -1
        }
    }
    arr.splice(left, 0, num)
}

const findMedian = (arr) => {
    let n = arr.length;
    let median;
    if (n % 2 === 0) {
        let mid = n / 2
        median = (arr[mid] + arr[mid-1]) /2
    } else {
        let mid = Math.floor(n / 2)
        median = arr[mid]
    }
    return median
}

addNum(5)
addNum(2)
addNum(3)
addNum(10)

console.log(findMedian(arr))

