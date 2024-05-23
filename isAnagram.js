const s1 = "anagram";
const s2 = "nagramn";

const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return "string length not match";
  const map = new Map();

  for (let val of string1) {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else map.set(val, 1);
  }
    const obj = Object.fromEntries(map.entries());
  console.log(obj)
  for (let val of string2) {
    if (!map.has(val)) return false;
    map.set(val, map.get(val) - 1);

    if (map.get(val) === 0) map.delete(val);
  }
  //return (map.size < 0)

  if (map.size > 0) return "there are items in the map";
  return true;
};
//isAnagram(s1, s2)

console.log(isAnagram(s1, s2));
