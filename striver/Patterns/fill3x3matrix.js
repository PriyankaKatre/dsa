const nForest = (n) => {
    let rows = [];
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row+= '*'
        }
       rows.push(row);
    }
    return rows
}

const forests = nForest(3);
forests.forEach((f) => {
    console.log(f)
})
