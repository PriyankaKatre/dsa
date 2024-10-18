const isoscelesTrianglePatternReverse = (n) => {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (j = 0; j < i; j++) {
            row= row + ' '
        }
        for (k = 0; k < 2*n - (2*i+1); k++) {
          row = row + "*";
        }
         for (j = 0; j < i; j++) {
            row= row + ' '
        }
        console.log(row)
    }
}

isoscelesTrianglePatternReverse(5)
