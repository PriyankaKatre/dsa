const isoscelesTrianglesCombine = (n) => {
    const rows1 = [],
      rows2 = [];

    for (let i = 0; i < n; i++) {
        let row1 = '';
        let row2 = "";
        for (let j = 0; j < n - i - 1; j++) {
            row1 = row1 + ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            row1= row1 + '*'
        }

        for (let j = 0; j < i; j++) {
          row2 = row2 + " ";
        }
        for (let k = 0; k < 2*n-(2 * i + 1); k++) {
          row2 = row2 + "*";
        }
        rows1.push(row1);
        rows2.push(row2);
    }
    rows1.forEach(row => {
        console.log(row)
    })
    rows2.forEach((row) => {
      console.log(row);
    });

}
isoscelesTrianglesCombine(5)
