const union = (arr1, arr2) => {
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;

    let i = 0; let j = 0

    const result = [];
    while (i < arr1Length && j < arr2Length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++
        } else if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++
        } else {
            result.push(arr2[j]);
            i++;
            j++

        }
    }
    while (i < arr1Length) {
        result.push(arr1[i]);
        i++
    }
    while (j < arr2Length) {
        result.push(arr2[i]);
        j++
    }
    return result
}

console.log(union([1, 2, 3, 4, 5, 8], [2, 3, 5, 7]))

const intersection = (arr1, arr2) => {
    let i = 0, j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++
        }
        else if (arr1[i] > arr2[j]) {
            j++
        }
        else {
            result.push(arr1[i]);
            i++;
            j++;

        }
    }
    return result
}
console.log(intersection([1, 2, 3, 4, 5, 8], [2, 3, 5, 7]))

