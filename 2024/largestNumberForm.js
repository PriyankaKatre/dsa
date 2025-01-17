const sortArray = (arr) => {
    return arr.sort((a, b) => {
        let firstSecond = '' + a + b;
        let secondFirst = '' + b + a
        return firstSecond > secondFirst ? -1 : 1
    }).join('')
}


var arr = [13,4,3, 9]
console.log(sortArray(arr))



