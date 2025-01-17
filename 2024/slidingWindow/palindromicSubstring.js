const countSubstring = (string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        let left = i;
        let right = i;
        helper(left, right);
        helper(left, right+1);
    }
    function helper(left, right) {
        while (left >= 0 && right <= string.length - 1 && string[left] === string[right]) {
            count++;
            left--;
            right++
        }
    }

    return count;
}

console.log(countSubstring('aaa'))
