/*


*
* *
* * *
* * * *
* * * * *

*/

const invertedRightAngleTriangle = (n) => {
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i));
  }
};

const equilateralTriangle = (rows) => {
  for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = rows - i - 1; j >= 1; j--) {
      line += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      line += `*`;
      line += " ";
    }
    console.log(line);
  }
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printStarPattern(rows) {
  for (let i = 0; i <= rows; i++) {
    console.log("* ".repeat(i));
  }
}

// printStarPattern(5);

rl.question("Enter the number of rows for the star patterns", (input) => {
  const rows = parseInt(input, 10);
  //   printStarPattern(rows);
  //   invertedRightAngleTriangle(rows);
  equilateralTriangle(rows);

  rl.close();
});

/*

    *
   * *
  * * *
 * * * *
* * * * *

*/

/*

----*----
---*-*---
--*-*-*--
-*-*-*-*-

*/
