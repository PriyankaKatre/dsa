const stockSpan = (arr) => {
    let stack = [], result = [];
    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) {
          result.push(1);
        } else if (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
          result.push(1);
        } else if (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
              stack.pop()
            }
            if (stack.length === 0) {
                result.push(i+1)
            }
            else {
                 result.push(i - stack[stack.length - 1]);
            }
        }


        stack.push(i)
    }
    return result
}
console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]))
