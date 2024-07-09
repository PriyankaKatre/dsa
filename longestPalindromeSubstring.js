const longestPalindromeSubstring = (string) => {
    let longestStr = ''
    const isPal = (s, left, right) => {
       // console.log(left >= 0 && right <= s.length && s[left] === s[right])
        while (left >= 0 && right <= s.length && s[left] === s[right]) {
            left--;
            right++
        }
        
        return s.slice(left+1, right)
    }

    for (let i = 0; i < string.length; i++) {
        let oddPal = isPal(string, i, i);
        let evenPal = isPal(string, i, i + 1)
        console.log('oddPal', oddPal);
        console.log('br...............')
        console.log('evenPal', evenPal)
         console.log('br...............')

        let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal;
        if (longestPal.length > longestStr.length) {
            longestStr = longestPal
        }
    }
    return longestStr
}

longestPalindromeSubstring('babad')
