const recursiveInsertionSort = (arr, n) => {
     if (n <= 1) {
       return;
     }

     // Recursively sort the first n-1 elements
    recursiveInsertionSort(arr, n - 1);
    let last = arr[n - 1];
    let j = n - 2;

    // Move elements of arr[0..n-1], that are greater than last, to one position ahead
    while (j >= 0 && arr[j] > last) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = last;
}

let arr = [12, 11, 13, 5, 6];
(recursiveInsertionSort(arr, arr.length));

console.log(arr);
