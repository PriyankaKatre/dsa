const numberOfAnagrams = (s, p) => {
    let left = 0;
    let pmap = new Map();
    let smap = new Map();
    let count = 0;
    let result = []
    for (val of p) {
        pmap.set(val, (pmap.get(val) || 0) +1)
    }
    for (right = 0; right < s.length; right++) {
        smap.set(s[right], (smap.get(s[right]) || 0) + 1);

        if (right - left + 1 === p.length) {
            if (smap.size === pmap.size) {
                match = true;
                for (let [key, val] of pmap) {
                  if (val !== smap.get(key)) {
                      match = false;
                      //break;
                  }
                }
                if (match) {
                    count++;
                    result.push(left)
                }
            }

             smap.set(s[left], smap.get(s[left]) - 1);

             if (smap.get(s[left]) === 0) {
               smap.delete(s[left]);
             }
             left++;
        }
    }

    return { count, result };
}
const s = "cbaebcabacd";
const p = "abc";

console.log(numberOfAnagrams(s, p));
