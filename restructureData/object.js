const obj = [
    {
        key: 'sample1',
        data: 'data1'
    },
    {
        key: 'sample1',
        data: 'data1'
    },
    {
        key: 'sample2',
        data: 'data2'
    },
    {
        key: 'sample3',
        data: 'data3'
    },
    {
        key: 'sample1',
        data: 'data1'
    },
    {
        key: 'sample2',
        data: 'data2'
    },

]

const outputObject = {}

obj.forEach(val => {
    console.log(val.key)
    if (outputObject[val.key]) {
        outputObject[val.key].push(val)
    }
    else {
        outputObject[val.key] = [val]
    }
})
console.log(outputObject)
