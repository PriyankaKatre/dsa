const NearestSmallertoRight = (arr) => {
    let stack = [], result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
          result.push(-1);
        }
        else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
          result.push(stack[stack.length - 1]);
        }
        else if (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
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
    return result.reverse()
}

console.log(NearestSmallertoRight([4, 5, 2, 10, 8]));
