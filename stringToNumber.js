const stringToNumber = (s) => {
    let result = 0;
    let index = 0;
    let isNeg = false;
    for (let i = index; i < s.length; i++) {
        if (s[i] === " ") {
            index++
        } else {
            break;
        }
    }
    if (s[index] === '-' || s[index] === '+') {
        isNeg = s[index] === '-';
        index++
    }

    for (let i = index; i < s.length; i++) {
        // /To convert string to number we need to minus from '0' ascii/
        let num = s.charCodeAt(i) - 48;
        if (num < 0 || num > 9) break;
        result = result * 10 + num;
    }

    if (isNeg) {
        result = -result
    }
    let min = -(2 ** 31);
    let max = 2 ** 31 - 1

    let minima = Math.min(max, result);
    return Math.max(minima, min)
}

console.log(stringToNumber('   -34fdsfd'))
