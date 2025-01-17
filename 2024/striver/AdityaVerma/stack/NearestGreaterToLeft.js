const NearestGreatertoLeft = (arr) => {
    let stack = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) {
            result.push(-1);
        }
        else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
            result.push(stack[stack.length - 1])
        }
        else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop()
            }
            if (stack.length === 0) {
                result.push(-1)
            } else {
                result.push(stack[stack.length-1])
            }
        }

        stack.push(arr[i])
    }
    return result
}

console.log(NearestGreatertoLeft([1, 3, 2, 4]));
