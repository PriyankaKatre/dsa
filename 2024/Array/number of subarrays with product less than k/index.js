let numSubArrayProductLessThanK = (arr, k) => {

    let left = 0, right = 0, result = 0, product = 1;
    while (right < arr.length) {
        if (k <= 0) {
            return 0
        }
        product *= arr[right];
        //console.log('product', product)

        if (product >= k ) {
            product = product / arr[left];
            left++
        }
        result += right - left + 1
        console.log('result', result)

        right++
    }
    return result
}

console.log(numSubArrayProductLessThanK([2, 4, 5, 3], 12))
