const maxProductSubArray = (arr) => {
    let leftproduct = 1, rightProduct = 1, max = 0;
    for (let i = 0; i < arr.length; i++) {
        leftproduct = leftproduct === 0 ? 1 : leftproduct;
        rightProduct = rightProduct === 0?1 :rightProduct
        leftproduct *= arr[i],
        rightProduct *= arr[arr.length - 1 - i]
        max= Math.max(max, Math.max(leftproduct, rightProduct))
    }

    return max
}

console.log(maxProductSubArray([1, 2, -3, 0, -4, -5]));
