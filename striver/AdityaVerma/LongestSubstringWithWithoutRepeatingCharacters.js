const LongestSubstringWithWithoutRepeatingCharacters = (arr, k) => {
    let set = new Set(); left = 0, right = 0, result =0;
    while (right < arr.length) {
        if (!set.has(arr[right])) {
            set.add(arr[right])
            if (set.size === k) {
                result = Math.max(result, right-left+1)
            }
            right++;
        } else {
            set.delete(arr[left]);
            left++
        }
        if (right - left + 1 > k) {
            set.delete(arr[left])
            left++
        }

    }
    return result

}
console.log(LongestSubstringWithWithoutRepeatingCharacters('pwwkew', 3));
