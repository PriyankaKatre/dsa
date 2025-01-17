const setMetrixToZero = (metrix) => {
    let n = metrix.length;
    let m = metrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (metrix[i][j] === 0) {
                metrix[i][j] =-1
            }
        }
    }
    return metrix
}
console.log(
  setMetrixToZero([
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5]
  ])
);
