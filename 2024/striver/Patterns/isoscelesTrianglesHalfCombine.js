const isoscelesTrianglesHalfCombine = (n) => {
  let rows1 = [],
    rows2 = [];
  for (let i = 0; i < n; i++) {
    let row1 = "",
      row2 = "";

    for (let i = 0; i < n - i - 1; i++) {
      row1 += "";
    }
    for (let j = 0; j <= i; j++) {
      row1 += "*";
    }

    for (let i = n - 2; i > n - i - 1; i--) {
      row2 += "";
    }
    for (let j = n - 2; j >= i; j--) {
      row2 += "*";
    }
    rows1.push(row1);
    rows2.push(row2);
  }
  rows1.forEach((row) => {
    console.log(row);
  });
  rows2.forEach((row) => {
    console.log(row);
  });
};

isoscelesTrianglesHalfCombine(5);
