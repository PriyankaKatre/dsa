const rightAngleTriangleincrementNumbers = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        let row =''
        for (j = 1; j <= i; j++) {
            result = result + 1;
            row+=result + ' '
        }
            console.log(row);

    }
}
rightAngleTriangleincrementNumbers(5)
