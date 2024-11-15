// const palindrome = (str) => {
//     str= str.toLowerCase()
//     if (str.length <= 1) return true;
//     if (str[0] === str[str.length - 1]) {
//         return palindrome(str.substring(1, str.length - 1));
//     }
//     return false
// }

const palindrome = (string) => {
    let str = string.toLowerCase().split("");
    if(str.length === 0) return
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--
    };
    if (string.toLowerCase() === str.join('')) {
        return true
    }
    else {
        return false
    }
}

console.log(palindrome("ABCDCBa"));
