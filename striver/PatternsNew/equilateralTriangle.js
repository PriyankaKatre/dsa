
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

function printStarPattern(rows) {
    let line = '';
      for (let i = rows; i >= 1; i--) {
          //console.log('-'.repeat(i));
         line+='-';
      }
    console.log(line)
    }

    rl.question("Enter the number of rows for the star patterns", (input) => {
      const rows = parseInt(input, 10);
      printStarPattern(rows);
      rl.close();
    });


const equilateralTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let j = 1; j <= n-i; j++) {
      output += "-";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      output += "*";
    }
    console.log(output);
 }
};

equilateralTriangle(5);

// const equilateralTriangle = (n) => {
//     for (let j = n; j >= 0; j--) {
//      console.log("-".repeat());
//     }
//     // for (let k = 1; k <= 2 * i - 1; k++) {
//     //   output += "*";
//     // }

// };

// equilateralTriangle(5);

