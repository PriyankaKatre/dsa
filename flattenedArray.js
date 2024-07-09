const array = ['q', 2, 3, {'a': 6}, [4, [5, [6, 10]]], 7, 8]



const flattenArray = (arr) => {
 const flattenedArray = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            flattenedArray.push(...flattenArray(element))
        } else {
            flattenedArray.push(element)
        }
    });
    return flattenedArray
}

console.log(flattenArray(array))

console.log(array.flat(3))


