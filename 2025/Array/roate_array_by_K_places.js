const leftRoatedArrayByKPlaces = (arr, k) => {
    const n = arr.length;
    let newK = k >= n ? k % n : k
    const temp = [];
    for (let i = 0; i < newK; i++) {
      temp.push(arr[i]);
    }
    for (let i = newK; i < arr.length; i++) {
        arr[i-newK] = arr[i]
    }

    for (let i = n - newK; i < arr.length; i++) {
        arr[i]= temp[i-(n-newK)]
    }
    return arr;

}

console.log(leftRoatedArrayByKPlaces([1, 2, 3, 4, 5], 6));

// Better


const roatedArrayByKPlaces = (arr, k) => {
    const n = arr.length
    let newK = k >= n ? k % n : k;
    let arr1 = arr.slice(0, newK);
    let arr2 = arr.slice(newK, n)
    let result = [...arr2, ...arr1];
    return result;
};

console.log(roatedArrayByKPlaces([1, 2, 3, 4, 5], 6));


