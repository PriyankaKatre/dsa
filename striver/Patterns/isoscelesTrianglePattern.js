const isoscelesTrianglePattern = (n) => {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n-i-1; j++) {
          row = row + " ";
        }
      for (let k = 0; k < 2*i+1; k++) {
        row = row + "*";
      }
         for (let j = 0; j < n - i - 1; j++) {
           row = row + " ";
         }
      console.log(row);
    }
}

(isoscelesTrianglePattern(5));
