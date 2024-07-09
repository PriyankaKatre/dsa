const lengthOfLongestSubstring = (string) => {
    const set = new Set();
    let start = 0;
    let end = 0;
    let max = 0;
    while (end < string.length) {
        if (!set.has(string[end])) {
            set.add(string[end]);
            end++;
            max = Math.max(max, set.size)
        }

        else {
            set.delete(string[start]);
            start++
        }
    }
    return max
    console.log('max', max)
    //return set;
}

console.log(lengthOfLongestSubstring('adbcbab'))



// 1 revision

const longestSubstringLength = (string)  =>{
    const set = new Set();
    let start = 0;
    let end = 0;
    let max = 0

    while (end < string.length) {
        if (!set.has(string[end])) {
            set.add(string[end])
            end++;
            max = Math.max(max, set.size)
        }
        else {
            set.delete(string[start]);
            start++
        }
    }

   
    return max
}
console.log('max', longestSubstringLength('abcbadb'))
