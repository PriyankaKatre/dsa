const arr = [-1, -2, 4, 5, 8, 9, -3, -4];
const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const arr3 = [-2, 7, -3, 4];

const contigiousSum = (arr) => {
    let sum = 0;
    let max= arr[0]
    for (let val of arr) {
        sum += val;
        if (sum > max) {
            max =sum
        }
        if (sum < 0) {
            sum =0
        }
    }
    return max
}

console.log(contigiousSum(arr))
