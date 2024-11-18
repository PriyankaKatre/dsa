const highestLowestfreq = (arr) => {
  let max = 0;
  let min = Infinity;
  let maxVal;
  let minVal;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  for (let [key, val] of map) {
    if (val > max) {
      max = val;
      maxVal = key;
    }
    if (val < min) {
      min = val;
      minVal = key;
    }
  }
  return { maxVal, minVal };
};
console.log(highestLowestfreq([10, 5, 10, 15, 10, 5]));
