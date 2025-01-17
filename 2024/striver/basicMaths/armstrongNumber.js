const armstrongNumber = (num) => {
    let n = num;
    let digits = [];
    let newNum =  0;
    while (num > 0) {
        let ld = num % 10;
        digits.push(ld)
        num = Math.floor(num / 10);
    }
    for (let i = 0; i < digits.length; i++) {
        newNum += digits[i] ** digits.length;
    }
    if (n === newNum) {
      return true;
    } else {
      return false;
    }
}
console.log(armstrongNumber(153))
