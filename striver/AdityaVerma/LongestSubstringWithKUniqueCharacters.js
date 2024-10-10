const LongestSubstringWithKUniqueCharacters = (arr, k) => {
    let left = 0, right = 0, result = 0, map= new Map();
    while (right < arr.length) {
        map.set(arr[right], (map.get(arr[right]) || 0) + 1);

        while (map.size > k) {
             map.set(arr[left], map.get(arr[left]) - 1);
             if (map.get(arr[left]) === 0) {
               map.delete(arr[left]);
             }
            left++;
        }
        if (map.size === k) {
            result = Math.max(result, right - left + 1);
        }
        right++
    }
    return result;
}
console.log(LongestSubstringWithKUniqueCharacters("aabacbebebe", 3));
