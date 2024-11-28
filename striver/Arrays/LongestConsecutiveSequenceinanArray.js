const LongestConsecutiveSequence = (arr) => {
    let longest = 1;
    let set = new Set(arr);

    for (let it of set) {
        if (!set.has(it - 1)) {
          let count = 1;
          let x = it;
          while (set.has(x + 1)) {
            x = x + 1;
            count = count + 1;
          }
          longest = Math.max(longest, count);
        }
    }
    return longest;
}


console.log(LongestConsecutiveSequence([100, 200, 1, 3, 2, 4]));
