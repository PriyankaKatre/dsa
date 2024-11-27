const reArrangeArrayElement = (arr) => {
    let n = arr.length;
    let pos = [];
    let neg = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            pos.push(arr[i])
        } else {
            neg.push(arr[i])
        }
    }
    if (pos.length < neg.length) {
        for (let i = 0; i < pos.length; i++) {
            arr[2 * i] = pos[i];
            arr[2 * i + 1] = neg[i]
        }
        let index = pos.length * 2;
        for (let i = pos.length; i < neg.length; i++) {
            arr[index] = neg[i];
            index++
        }
    } else {
        for (let i = 0; i < neg.length; i++) {
            arr[2 * i] = pos[i];
            arr[2*i+1] = neg[i]
        }
        let index = neg.length * 2;
        for (let i = neg.length; i < pos.length; i++) {
            arr[index] = pos[i];
            index++
        }
    }
  return arr
}

console.log(reArrangeArrayElement([3, 1, -2, -5, 2, -4]));
