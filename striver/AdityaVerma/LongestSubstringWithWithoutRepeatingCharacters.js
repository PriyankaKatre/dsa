const LongestSubstringWithWithoutRepeatingCharacters = (arr, k) => {
    let set = new Set(); left = 0, right = 0, result =0;
    while (right < arr.length) {
        if (!set.has(arr[right])) {
            set.add(arr[right])
        }
        right++
    }
    return set

}
console.log(LongestSubstringWithWithoutRepeatingCharacters('pwwkew', 3));
