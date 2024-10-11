const MinimumWindowSubstring = (s, t) => {
  let left = 0,
    right = 0,
    smap = new Map(),
    tmap = new Map(),
    minLength = 10 ** 9,
    count = 0,
    startIndex = -1;

  for (val of t) {
    tmap.set(val, (tmap.get(val) || 0) + 1);
  }
  while (right < s.length) {
    if (tmap.has(s[right])) count = count + 1;
    tmap.get(s[right]--);

    while (count === t.length) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        startIndex = left;
      }
      tmap.get(s[left]--);
      if (tmap.get(s[left]) > 0) {
        count = count - 1;
      }
    }
    right = right + 1;
  }
  return startIndex === -1 ? "" : s.substring(startIndex, minLength);
};

console.log(MinimumWindowSubstring("ddaaabbca", "abc"));
//console.log(MinimumWindowSubstring("ADOBECODEBANC", "ABC"));
