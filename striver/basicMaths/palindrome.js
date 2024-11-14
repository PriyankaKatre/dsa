const palindrome = (num) => {
    let newNum = num
    let revNum = 0;
    while (newNum > 0) {
        let lastDigit = newNum % 10
        revNum = revNum * 10 + lastDigit;
        newNum = Math.floor(newNum/10)
    }

    let isPalindrome = num === revNum ? "palindrome" : "not Palindrome";
    return isPalindrome;
}
console.log(palindrome(13311));
