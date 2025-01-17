// Optimize approach
const reArrange = (arr) => {
    let even = 0;
    let odd = 1
    while (true) {
        while (even <= arr.length && arr[even] % 2 === 0) {
            even += 2
        }
        while (odd <= arr.length && arr[odd] % 2 === 1) {
            odd += 2
        }
        if (even < arr.length && odd < arr.length) {
            [arr[even], arr[odd]] = [arr[odd], arr[even]]
        }
        else {
            break;
        }
    }
}

const array = [3, 6, 12, 4, 16, 1, 5, 8, 17,19]
reArrange(array)
console.log('array', array)


//bruite force approach

const rearrage = (arr) => {
    let even = 0, odd = 1;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr[i] = arr[even];
            even += 2
        }
        if (arr[i] % 2 === 1) {
            newArr[i] = arr[odd]
            //console.log('newArr', newArr)
            odd += 2
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = newArr[i]
    }
    return arr
}
console.log(rearrage([3, 6, 12, 4, 16, 1, 5, 8, 17,19]))
