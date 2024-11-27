const reArrangeArrayElement = (arr) => {
    let positive = [];
    let negative = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative.push(arr[i])
        } else {
            positive.push(arr[i])
        }
    }
    if (positive.length < negative.length) {
        for (let i = 0; i < positive.length; i++) {
            arr[2 * i] = positive[i];
            arr[2 * i + 1] = negative[i]
        }
        let index = positive.length * 2;
        for (let i = positive.length; i < negative.length; i++) {
            arr[index] = negative[i];
            index++
        }
    } else {
        for (let i = 0; i < negative.length; i++) {
            arr[2 * 1] = positive[i];
            arr[2*i+1] = negative[i]
        }
        let index = negative.length * 2;
        for (let i = negative.length; i < positive.length; i++) {
            arr[index] = p[i];
            i++
        }
    }
  return arr
}

console.log(reArrangeArrayElement([1, -5, -4, -6, 2]));
