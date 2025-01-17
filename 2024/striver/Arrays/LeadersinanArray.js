const leaderinAnArray = (arr) => {
    let result = [];
    let last = arr[arr.length - 1];
    let max = arr[arr.length - 1];
    result.push(last);

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > max) {
            result.push(arr[i]);
            max= arr[i]
        }
    }
    return result

}
console.log(leaderinAnArray([16, 17, 4, 3, 5, 2]));
