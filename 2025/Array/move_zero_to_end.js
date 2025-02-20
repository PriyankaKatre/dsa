//optimal approach

const moveZerosToEnd = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};

console.log(moveZerosToEnd([1, 0, 3, 4, 5, 0, 8, 9, 0, 2]));
// Using Built in method

const moveZerosEnd = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let nums = arr.filter((a) => a !== 0);
    let zeros = arr.filter((a) => a === 0);
    return [...nums, ...zeros];
  }
};

console.log(moveZerosEnd([1, 0, 3, 4, 5, 0, 8, 9, 0, 2]));



//Two Pointer

const moveZeros = (arr) => {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
    }
  }
  return arr;
};

console.log(moveZeros([1, 0, 3, 4, 5, 0, 8, 9, 0, 2]));
