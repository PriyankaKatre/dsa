
grid = [
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "1"],
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
    console.log('grid', grid)
    dfs(rowIndex + 1, colIndex, grid);
    dfs(rowIndex - 1, colIndex, grid);
    dfs(rowIndex, colIndex + 1, grid);
    dfs(rowIndex, colIndex-1, grid);
}

console.log(numberOFIlands(grid))


// const countIlands = (grid) => {
//     let m = grid.length;
//     let n = grid[0].length;
//     let count = 0;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j] === '1') {
//                 dfs1(i, j, grid);
//                 count++
//             }
//         }
//     }
//     return count
// }

// let dfs1 = (i , j , grid) => {

//         if (i < 0 || i > grid.length || j < 0 || j > grid[0].length || grid[i][j] === '0') {
//             return;
//         }
//         grid[i][j] = '0';
//         dfs1(i+1, j, grid)
//         dfs1(i-1, j, grid)
//         dfs1(i, j+1, grid)
//         dfs1(i, j-1, grid)

// }
// console.log(countIlands(grid))

let str = "this is a very long string";

const minMax = (str) => {
    let sortedString = str.split(' ').sort((a, b) => a.length - b.length)
   console.log(sortedString)
};
console.log(minMax(str));
