function validSolution(board) {
    let arr = [5, 5, 3, 4, 6, 7, 8, 9, 1, 2, 0, 0];

  // Helper function to check if a block (row, column, or sub-grid) is valid
  const isValidBlock = (block) => {
      const filteredBlock = block.filter((num) => num !== 0);
      console.log(filteredBlock)
    return new Set(filteredBlock).size === filteredBlock.length;
  };

    isValidBlock(arr)
  // Check rows
  for (let row of board) {
    if (!isValidBlock(row)) return false;
  }

//   // Check columns
  for (let col = 0; col < 9; col++) {
    const column = board.map((row) => row[col]);
    if (!isValidBlock(column)) return false;
  }

//   // Check sub-grids
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      const subGrid = [];
      for (let r = row; r < row + 3; r++) {
        for (let c = col; c < col + 3; c++) {
          subGrid.push(board[r][c]);
        }
      }
      if (!isValidBlock(subGrid)) return false;
    }
  }

  return true;
}

// Example Usage
const sudokuBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

console.log(validSolution(sudokuBoard)); // Output: true
