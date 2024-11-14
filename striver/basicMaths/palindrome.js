// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

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
