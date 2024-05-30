const removeDuplicate = (str) => {
    const stack = new Array();

    for (let i = 0; i < str.length; i++) {
        console.log('stack.length', stack.length)
        if (stack.length && stack[stack.length - 1] === str[i]) {
            console.log('inside stake')
            stack.pop()
        }
        else {
            console.log('str[i]', str[i])
            stack.push(str[i])
        }
    }
    return stack.join('')
}
console.log(removeDuplicate('bbaca'))
