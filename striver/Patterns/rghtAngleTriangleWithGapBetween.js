const binaryRightAngleTriangle = (n) => {
    for (let i = 0; i < n; i++) {
        let row1 = '';
        let row2 = "";
        let row3 = "";

        let space = 2*(n-i-1)
        for (let j = 0; j <= i; j++) {
            row1+=j+1
        }
        for (let j = 0; j < space ; j++) {
            row3 += " ";
        }

        for (let k = i; k >= 0; k--) {
          row2 += k + 1;
        }
        console.log(row1,row3,row2)
    }
}
binaryRightAngleTriangle(4)
