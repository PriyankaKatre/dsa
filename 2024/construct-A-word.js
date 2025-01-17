function displayWord(pairs) {
  const mapping = {};
  const reverseMapping = {};


  // Parse the pairs and create mappings
  pairs.forEach((pair) => {
      const [first, second] = pair.split(">");
    mapping[first] = second;
    reverseMapping[second] = first;
  });

console.log("mapping", mapping);
  // Find the starting letter
  let start;
    for (const letter in mapping) {
      console.log('letter', letter);
    if (!reverseMapping[letter]) {
      start = letter;
      break;
    }
  }

  // Construct the word
  let word = start;
  while (mapping[start]) {
    word += mapping[start];
    start = mapping[start];
  }

  return word;
}

// Example usage
const pairs = ["s>p", "p>a", "a>i", "i>n"];
console.log(displayWord(pairs)); // Output: "spain"
