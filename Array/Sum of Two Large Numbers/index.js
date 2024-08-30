let add = (A, B) => {
    const AL = A.length;
    const BL = B.length;
    const ML = Math.max(AL, BL);
    let carry = 0;
    let sum = '';

    for (let i = 1; i < ML; i++) {
        const a = +A.charAt(AL - i)
        const b = +B.charAt(BL - i)
        let t = carry + a + b;
        carry = t / 10 | 0;
        t %= 10;
        sum = (i === ML && carry) ? carry * 10 + t + sum : t + sum;
    }
    return sum
}
const result = add(
    '999999999999999999999999999999999999999999999999999999999999999999999999999',
    '999999999999999999999999999999999999999'
);

console.log(result); //
