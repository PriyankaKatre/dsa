// const rightAngleTriangle = (n) => {
//     let output = "";
//     for (let i = 1; i <= n; i++) {
//         output+='*'
//         console.log(output)
//     }
// }

// rightAngleTriangle(5);
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printStarPattern(rows) {
  for (let i = 0; i <= rows; i++) {
    console.log("*".repeat(i));
  }
}

rl.question("Enter the number of rows for the star patterns", (input) => {
  const rows = parseInt(input, 10);
  printStarPattern(rows);
  rl.close();
});
