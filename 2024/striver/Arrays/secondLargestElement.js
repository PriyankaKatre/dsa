const secondLargestElement = (arr) => {
    let largest = -Infinity;
    let secondlargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondlargest = largest;
            largest = arr[i]
        }
        else if (largest > arr[i] && secondlargest < arr[i]) {
            secondlargest = arr[i]
        }
    }
    return  secondlargest;
}
console.log(secondLargestElement([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
