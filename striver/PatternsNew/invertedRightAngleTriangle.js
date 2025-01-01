// const invertedRightAngleTriangle = (n) => {
//     let outPut = "";
//     for (let i = n; i >= 1; i--) {
//         //for (let j = i; j >= 1; j--) {
//             outPut += '*'
//         //}
//         console.log(outPut)
//     }
// }



const invertedRightAngleTriangle = (n) => {
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i));
  }
};
invertedRightAngleTriangle(5);
