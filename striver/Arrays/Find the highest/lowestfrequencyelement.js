const highestLowestfreq = (arr) => {
  let max = 0;
  let min = Infinity;
  let maxVal;
  let minVal;
  let map = new Map();
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!map.has(arr[i])) {
  //       map.set(arr[i], 1);
  //     } else {
  //       map.set(arr[i], map.get(arr[i]) + 1);
  //     }
  //   }
  //   for (let [key, val] of Object.entries(map1)) {
  //     if (val > max) {
  //       max = val;
  //       maxVal = key;
  //     }
  //     if (val < min) {
  //       min = val;
  //       minVal = key;
  //     }
  //   }
  let map1 = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map1[arr[i]]) {
      map1[arr[i]] = 1;
    } else {
      map1[arr[i]]++;
    }
  }
  Object.keys(map1).forEach((key) => {
    if (map1[key] > max) {
      max = map1[key];
      maxVal = key;
    }
    if (map1[key] < min) {
      min = map1[key];
      minVal = key;
    }
  });

  return { maxVal, minVal };
};
console.log(highestLowestfreq([10, 5, 10, 15, 10, 5]));
