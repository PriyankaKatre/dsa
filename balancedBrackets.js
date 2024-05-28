const string = '{[{()}]})'

const balancedBrackt = (string) => {
    const stake = [];
    const brackets = '{}, [], ()';
    for (let i = 0; i <= string.length - 1; i++) {
        stake.push(string[i]);
        const open = stake[stake.length - 2];
        const close = stake[stake.length - 1];
        const bracket = open + close
        if(brackets.includes(bracket)) {
            stake.pop();
            stake.pop()
        }
    }

    return stake.length === 0
}
console.log(balancedBrackt(string))
