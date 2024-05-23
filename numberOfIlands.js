
grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
const numberOFIlands = (grid) => {
    let countIslands = 0;
    for(let rowIndex in grid) {
        for(let colIndex in grid[rowIndex])
            if(grid[rowIndex][colIndex] === '1') {
                countIslands++
                dfs(parseInt(rowIndex), parseInt(colIndex), grid);
            }
    }

    return countIslands;
}

const dfs = (rowIndex, colIndex, grid) => {
    if (
      grid[rowIndex] === undefined ||
      grid[rowIndex][colIndex] === undefined ||
      grid[rowIndex][colIndex] === "0"
    )
      return;
    grid[rowIndex][colIndex] = "0";
    dfs(rowIndex + 1, colIndex, grid);
    dfs(rowIndex - 1, colIndex, grid);
    dfs(rowIndex, colIndex + 1, grid);
    dfs(rowIndex, colIndex-1, grid);

}

console.log(numberOFIlands(grid))
