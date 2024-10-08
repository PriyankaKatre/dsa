const map = new Map()

const memoizeOne = (fn) => {
    const temp = (...args) => {
            //console.log(args);
        const key = args.join('_')
         console.log(JSON.stringify(args));
        if (map.has(key)) {
            console.log('from memoize')
            return map.get(key)
        }
        const result = fn(...args);
        map.set(key, result)
        return result
    }
    return temp
}

const add = (a, b) => a + b

const add_memo = memoizeOne(add)

console.log(add_memo(1, 3))
//console.log(add_memo(1, 3))
