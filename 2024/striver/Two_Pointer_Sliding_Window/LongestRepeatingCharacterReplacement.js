const LongestRepeatingCharacterReplacement = (str, k) => {
  let left = 0,
    right = 0,
    map = new Map(),
    maxLength = 0,
    maxFrequency = 0;
  while (right < str.length) {
    if (map.has(str[right])) {
      map.set(str[right], map.get(str[right]) + 1);
    } else {
      map.set(str[right], 1);
    }

    maxFrequency = Math.max(maxFrequency, map.get(str[right]));
    if (right - left + 1 - maxFrequency > k) {
      map.set(str[left], map.get(str[left]) - 1);
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
};
console.log("hi");
console.log(LongestRepeatingCharacterReplacement("AABABBA", 2));
