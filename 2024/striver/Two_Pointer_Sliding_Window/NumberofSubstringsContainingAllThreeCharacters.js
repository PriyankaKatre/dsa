const NumberofSubstringsContainingAllThreeCharacters = (str) => {
  let left = 0,
    right = 0,
    count = 0;
  let map = new Map([
    ["a", 0],
    ["b", 0],
    ["c", 0],
  ]);

  while (right < str.length) {
    map.set(str[right], map.get(str[right]) + 1);

    while (map.get("a") > 0 && map.get("b") > 0 && map.get("c") > 0) {
      count += str.length - right;
      map.set(str[left], map.get(str[left]) - 1);
      left++;
    }

    right++;
  }

  return map;
};

console.log(NumberofSubstringsContainingAllThreeCharacters("bbacba")); // Output: 10
