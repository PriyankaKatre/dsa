const pascalsTriangle = (numRows) => {
    let result = [[1]];

    for (let i = 0; i < numRows; i++) {
        let preRow = result[result.length - 1];

        let newRow = [1];
        for (let j = 0; j < preRow.length - 1; j++) {
            newRow.push(preRow[j]+preRow[j+1])
        }

        newRow.push(1)
        result.push(newRow);
    }
    return result
}

console.log(pascalsTriangle(5))
