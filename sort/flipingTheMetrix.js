function flippingMatrix(matrix) {
  const n = matrix.length / 2;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const maxVal = Math.max(
        matrix[i][j],
        matrix[i][2 * n - j - 1],
        matrix[2 * n - i - 1][j],
        matrix[2 * n - i - 1][2 * n - j - 1]
      );
      maxSum += maxVal;
    }
  }
  return maxSum;
}
console.log(flippingMatrix([[1, 2], [3, 4]]));
