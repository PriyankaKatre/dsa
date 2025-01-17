const moveZerosToEnd = (arr) => {
    if (arr.length === 0) return arr;
    let j = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
          arr[j] = arr[i];
          j++
      }
  }
    for (let i = j; i < arr.length; i++) {
        arr[i]=0
    }
  return arr;
};

console.log(moveZerosToEnd([1, 0, 3, 0, 5, 0, 9, 8]));

const moveZerosToStart = (arr) => {
    let last = arr.length -1;
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] !== 0) {
            arr[last] = arr[i];
            last--;
        }
    }
    for (let i = 0; i <= last; i++) {
        arr[i] = 0
    }
    return arr;
}

console.log(moveZerosToStart([1, 0, 3, 0, 5, 0, 9, 8]));


