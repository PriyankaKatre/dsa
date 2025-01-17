const input1 = { a: 1, b: 2, c: 3, d: 12, e: 20 };
const input2 = { a: 10, d: 12, e: 20,  b: 22, c: 33 };
const resultObj = {};

Object.keys(input1).map((key) => {
    if (input1[key] === input2[key]) {
        resultObj[key] = input1[key]
    }
})

console.log(resultObj);
