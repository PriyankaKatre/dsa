const binaryRightAngleTriangle = (n) => {
    for (let i = 0; i < n; i++) {
        let start = 1;
        let result = "";
        if (i % 2 === 0) start = 0;
        else start = 1;
        for (let j = 0; j <= i; j++) {
            result += start;
            start = 1-start
        }
        console.log(result)
    }
}

binaryRightAngleTriangle(5);
