const TwoSum = (arr, target) => {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        let pairTraget = target - arr[i]

        if (map[pairTraget] !== "undefined") {
          return [map[pairTraget], i];
        }
        map[arr[i]] = i;
    }
    return 'No'
}

console.log(TwoSum([3,2,4], 6));
