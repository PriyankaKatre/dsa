const minimumInRotateSortedArray = (arr) => {
    let ans = Infinity,
      left = 0,
      right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[left] <= arr[right]) {
            ans = Math.min(ans, arr[left]);
            break;
        }

        if (arr[left] <= arr[mid]) {
            ans = Math.min(arr[left], ans);
            left = mid + 1
        }
        else {
            ans = Math.min(arr[mid], ans);
            right = mid-1
        }
    }

}
console.log(minimumInRotateSortedArray([7, 8, 1, 2, 3, 4, 5, 6]));
