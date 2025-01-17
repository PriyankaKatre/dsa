const isPalindrome = (s) => {
    return palindromeCheck((combinedString(s)))
}

const combinedString = (str) => {
    const char = 'abcdefghijklmnopqrstuvwxyz1234567890?';
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let lCase = str[i].toLowerCase();
        if (char.indexOf(lCase) !== -1) {
            newStr+=lCase
        }
    }
    return newStr
}

const palindromeCheck = (string) => {
    const reverseString = string.split('').reverse().join('')
    if (reverseString === string) return true
    return false
}
console.log(isPalindrome("1?A man, a plan, a canal: Panama?1"))
