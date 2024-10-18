const trianglePatternNumbers = (n) => {
    for (let i = 0; i < n; i++) {
        let row= ''
        for (let j = 0; j <= i; j++) {
            row+=j+1
        }
        console.log(row)
    }
}
trianglePatternNumbers(5);
