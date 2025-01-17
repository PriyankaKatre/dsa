const longestSubstringWithoutReaptingCharactor = (str) => {
    let left = 0, right = 0, maxlength= 0;
    let map = new Map();
    while (right < str.length) {
        if (!map.has(str[right])) {
            map.set(str[right], right)
            maxlength = Math.max(maxlength, right - left + 1);
            right++;
        } else {
            map.delete(str[left]);
            left++
        }
    }
    return maxlength;
}

const str = 'cadbzabcdx'

console.log(longestSubstringWithoutReaptingCharactor(str));
