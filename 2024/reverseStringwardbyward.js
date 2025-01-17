const string = 'reverse this string if possible'

const reverseString = (str) => {
    const reversedStr = str.split(' ').map((s) => {
        return s.split('').reverse().join('')
    })
    return reversedStr;
}
console.log(reverseString(string));
