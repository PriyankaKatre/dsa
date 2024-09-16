const string = '({[{()}]})'

const balancedBrackt = (string) => {
    const stack = [];
    const parentheses = '{}, (), []';
    let count= 0;
    let bracket;
    for(let i in string) {
        stack.push(string[i]);
        const open = stack[stack.length - 2];
        const close = stack[stack.length - 1]

        bracket = open + close
        if (parentheses.includes(bracket)) {
            stack.pop();
            stack.pop();
            count++
        }
    }


    return count
}
console.log(balancedBrackt(string))
