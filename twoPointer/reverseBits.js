const reverseBits = (n) => {
    // const number = n.split("").reverse().join('');
    // console.log('number', number)

    return Number(n).toString(2)
}
console.log(reverseBits(42))
