const palindromeNumber = (number) => {
    let num = number.toString();
    for (let i = 0; i < num.length; i++) {
        let left = 0;
        let right = num.length - 1;
        while (left < right) {
            if (num[left] !== num[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}

console.log(palindromeNumber(1211))
