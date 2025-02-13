const flattenAndSum = (arr) => {
  let sum = 0;
  const flatArray = arr.flat(4);

  console.log(
    flatArray.reduce((acc, it) => {
     return  acc + it;
    }, 0)
  );
  for (let item of arr) {
    if (Array.isArray(item)) {
      console.log("inside if", sum);
      sum += flattenAndSum(item);
    } else {
      sum += item;
    }
  }

  return sum;
};

console.log(flattenAndSum([1, [2, [3, 4], 5], [6, 7], 8]));
