const arr1 = [-1, -2, 4, 5, 8, 9, -3, -4];
const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


const sumOfMaxSubArray = (arr) => {
    let sum = 0;
    let max = arr[0]
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return result
}
console.log(sumOfMaxSubArray(arr2))


const obj = {
    helloWorld: function () {
        console.log(this.name)
        return "Hello World" + this.name;
    },
    name: 'priyanka'
}

const obj2 = {
    helloWorld: obj.helloWorld,
    name: 'bye'
}
console.log(obj2.helloWorld.call(obj))
