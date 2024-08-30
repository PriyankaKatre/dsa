const searchInSortedMatrix = (matrix, target) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let row = 0;
    let col = cols - 1
    while (row < rows && col >= 0) {
        const current = matrix[row][col];
        if (current === target) {
            return [row, col]
        } else if (target > current) {
            row++
        } else {
            col--
        }
    }
    return -1
}

const matrix = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

const target = 5;
console.log(searchInSortedMatrix(matrix, target))
