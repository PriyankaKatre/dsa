// function transformString(input) {
//   const seen = new Set();
//   let result = "";

//   // Remove duplicates and maintain order
//   for (const char of input) {
//     if (!seen.has(char)) {
//       seen.add(char);
//       result += char;
//     }
//   }

//   // Reverse the result
//   const reversed = result.split("").reverse().join("");

//   // Combine the original result with the reversed string
//   result = result + reversed.slice(2);

//   return result;
// }

// // Example usage
// const input = "ababyz";
// const output = transformString(input);
// console.log(output); // Output: abyzba

// const transformString = (str) => {
//     let s = (str).split('').sort().join('');
//     let output = '';
//     for (let i = 0; i < s.length-1; i++) {
//         console.log(str.charCodeAt(i));
//         if (s.charCodeAt(i) < s.charCodeAt(i+1)) {
//           output += s[i];
//         }
//     }
//     return output;
// }
// console.log(transformString('ababyz'));

const spamEmail = (email, spam_words) => {
    let result = [];
    let map = new Map();

    for (let i = 0; i < spam_words.length; i++) {
      if (map.has(spam_words[i])) {
          map.set(map.get(spam_words[i]), map.get[spam_words[i]] + 1)
      } else {
          map.set(spam_words[i], 1)
      }
    }
    for (let i = 0; i < email.length; i++) {
        let count = 0;
        email[i].split(' ').forEach((key) => {
            if (map.has(key)) {
                count++
            }
        })
        if (count >= 2) {
            result.push('spam')
        } else {
             result.push("not-spam");
        }
    }
    return result;
}

console.log(
    spamEmail(
        ['free prize worth millions', 'ten tips for a carefree lifestyle'],
        ['free', 'money', 'win', 'millions']
    )
);

console.log(
  spamEmail(
    ["I paid him paid", "Summertime Sadness"],
    ["I", "Sadness", "paid"]
  )
);

const anagramDifference = (arr1, arr2) => {
  let result = [];

    for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length !== arr2[i].length) { result.push(-1); continue; }
    let map = new Map();

    let a1 = arr1[i].split("");
    let a2 = arr2[i].split("");
    a1.forEach((val) => {
      if (map.has(val)) {
        map.set(val, map.get(val) + 1);
      } else {
        map.set(val, 1);
      }
    });
      a2.forEach((val) => {
          if (map.has(val)) {
            map.set(val, map.get(val) - 1);
          } else {
            return false;
          }
          if (map.get(val) === 0) map.delete(val);

      })
    result.push(map.size);
  }
[0, 1, -1], [-1, 0, 1, 2, 3]
  return result;
};
//console.log(anagramDifference(["tea", "tea", "act"], ["ate", "toe", "acts"]));
console.log(anagramDifference(["a", "jk", "abb", 'mn', 'abc'], ["bb", "kj", "bbc", 'op', 'def']));
