//chunking

let chunkArray = (arr, chunkSize) => {
  for (let i = 0; i < arr.length; i += chunkSize) {
    let chunk = arr.slice(i, i + chunkSize);
    console.log(`Processing chunk: ${chunk}`);
  }
};

let largeArray = Array.from({ length: 100000 }, (_, i) => i + 1);
console.log(chunkArray(largeArray, 100));
//let largeArray1 = new Array(100).fill().map((_, i) => i + 1);
