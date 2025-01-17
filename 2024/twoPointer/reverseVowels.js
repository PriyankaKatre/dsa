// const reverseVowels = (str) => {
//     let left = 0, right = str.length - 1;
//     let res = str.split('');
//     let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);


//     while (left < right) {
//         if (!vowels.has(res[left])) left++;
//         else if (!vowels.has(res[right])) right--;
//         else {

//             [res[left], res[right]] = [res[right], res[left]];
//             left++;
//             right--;

//         }
//     }
//  console.log('str', res.join(''))
// }


// reverseVowels('hello')


// Revision
const revVoweles = (str) => {
    let string = str.split('')
    let vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (!vowel.has(string[left])) left++;
        else if (!vowel.has(string[right])) right--;
        else {
            [string[left], string[right]] = [string[right], string[left]];
            left++;
            right--
        }
    }
    return string.join('')
}

console.log(revVoweles('priyankA'))
