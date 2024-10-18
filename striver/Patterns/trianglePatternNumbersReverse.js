const trianglePatternNumbersReverse = (n) => {
  for (let i = 0; i < n; i++) {
      let row = "";
      let k = 0;
      for (let j = n - 1; j >= i; j--) {
        k= k+1
      row += k;
    }
    console.log(row);
  }
};
trianglePatternNumbersReverse(5);
