const leader = (arr) => {
    let size = arr.length
    let result = []
    let max_from_right = arr[size - 1];
    for (let i = size - 2; i >= 0; i--) {
        if (max_from_right < arr[i]) {
            max_from_right = arr[i]
        }
    }
    return result
}

console.log(leader([16, 17, 4, 3, 5, 2]))
//Answer -
