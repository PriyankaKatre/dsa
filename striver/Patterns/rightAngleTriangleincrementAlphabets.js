// const rightAngleTriangleincrementAlphabets = (n) => {
//   for (let i = 0; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += String.fromCharCode("A".charCodeAt(0) + j);
//     }
//     console.log(row);
//   }
// };

// rightAngleTriangleincrementAlphabets(5);

const rightAngleTriangleincrementAlphabets = (n) => {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode("A".charCodeAt(0) + i);
    }
    console.log(row);
  }
};

rightAngleTriangleincrementAlphabets(5);

