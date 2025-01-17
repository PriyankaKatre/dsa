const bookAllocation = (a, k) => {
    let sortPagearray = a.sort((a,b) => a-b)
    let min = sortPagearray[sortPagearray.length -1];
    let max = a.reduce((a, b) => a + b, 0)
    let res = 0;

    while (min < max) {
        let mid = (min + max) / 2
        if (isFisiable(a, k, mid)) {
            res = Math.floor(mid);
            max = mid - 1
        } else {
            min = mid +1
        }
    }
    return res
}

let isFisiable = (a, k, res) => {
    let student = 1;
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (sum + a[i] > res) {
            student++;
            sum = a[i];
        } else {
            sum += a[i]
        }
    }
    return student <= k;
}

console.log(bookAllocation([10, 10, 20, 30] , 2))
