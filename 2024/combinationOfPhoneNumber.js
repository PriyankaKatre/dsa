const phoneNumberCombination = (digits, start= 0) => {
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y']
    }

    const test = { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
    console.log(test[0])

    if (digits === '') return [];
    if (start >= digits.length) return [''];
    const digit = digits[start];
    const combination = [];

    const letters = map[digit]

    const suffixCombination = phoneNumberCombination(digits, start + 1);

    for(const letter of letters ) {
        for (const suffix of suffixCombination) {
            combination.push(letter + suffix)
        }
    }

    console.log(combination)

}

phoneNumberCombination('23')
