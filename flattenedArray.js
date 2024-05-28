const array = ['q', 2, 3, {'a': 6}, [4, [5, 6]], 7, 8]

const flattenedArray = [];

const flattenArray = (arr, flattenedArray) => {
    arr.forEach(element => {
        if (Array.isArray(element)) {
            flattenArray(element, flattenedArray)
        } else {
            flattenedArray.push(element)
        }
    });
    return flattenedArray
}

console.log(flattenArray(array, []))

console.log(array.flat(2))


