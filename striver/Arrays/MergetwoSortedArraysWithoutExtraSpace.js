const mergeTwoSortedArray = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0,
    j = 0;

  // Merging both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  // If there are remaining elements in arr1
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
};

console.log(mergeTwoSortedArray([0, 1, 2, 5], [3, 6, 7, 8, 9]));
