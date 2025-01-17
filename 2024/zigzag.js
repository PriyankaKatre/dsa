const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
  [21, 22, 23, 24]
];
const zigzag = (arr) => {
  let i = arr.length - 1;
  let j = 0;
  let result = [];
  while (i >= 0) {
      if (j === arr[i].length) {
        j = arr[i].length - 1;
        while (j >= 0) {
          result.push(arr[i][j]);
          j--;
        }
      } else {
        j = 0;
        while (j < arr[i].length) {
          result.push(arr[i][j]);
          j++;
        }
      }
    i--;
  }
  return result;
};
console.log(zigzag(arr));
