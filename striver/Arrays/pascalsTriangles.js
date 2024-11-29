const PascalTriangle = (n) => {
    let pascalTriangle = new Array(n)
    for (let i = 0; i < n; i++) {
        let row = new Array(i+1)
        row[0] = 1;
        row[row.length - 1] = 1;
        for (let j = 1; j < row.length - 1; j++) {
            let rowAbove = pascalTriangle[i - 1];
            row[j] = rowAbove[j]+rowAbove[j-1]
        }
        pascalTriangle[i] = row;

    }
    return pascalTriangle;
}

console.log(PascalTriangle(6));
