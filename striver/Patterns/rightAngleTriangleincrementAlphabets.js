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
      let num = 0;
    for (let j = n-1; j > i; j--) {
        row += String.fromCharCode("A".charCodeAt(0) + num);
        num+=1
    }
    console.log(row);
  }
};

rightAngleTriangleincrementAlphabets(5);

