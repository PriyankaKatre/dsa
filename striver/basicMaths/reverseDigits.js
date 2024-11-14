const reverseDigit = (num) => {
    let revNum = 0;
    while (num > 0) {
        let ld = num % 10;
        revNum = revNum * 10 + ld;
        num = Math.floor(num/10)
    }
    return revNum;
}
console.log(reverseDigit(501))
