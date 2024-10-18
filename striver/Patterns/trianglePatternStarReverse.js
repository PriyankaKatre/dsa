const trianglePattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n-1; j >= i; j--) {
      row = row + "*";
    }
    console.log(row);
  }
};

trianglePattern(4);
