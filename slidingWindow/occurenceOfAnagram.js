const occurenceOfAnagram = (string, pattern) => {
    let start = 0;
    let end = 0;
    let k = pattern.length;
    let count = 0;
    let map = new Map();

    // Initialize the frequency map for the pattern
    for (let char of pattern) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let matched = 0;
    console.log('map.size', map.size)

    while (end < string.length) {
        let endChar = string[end];
        if (map.has(endChar)) {
            map.set(endChar, map.get(endChar) - 1);
            if (map.get(endChar) === 0) {
                matched++;
            }
        }

        if (end - start + 1 === k) {
            if (matched === map.size) {
                count++;
            }

            let startChar = string[start];
            if (map.has(startChar)) {
                if (map.get(startChar) === 0) {
                    matched--;
                }
                map.set(startChar, map.get(startChar) + 1);
            }
            start++;
        }
        end++;
    }

    return count;
};

console.log(occurenceOfAnagram('aabaabaa', 'aaba')); // Output: 4
