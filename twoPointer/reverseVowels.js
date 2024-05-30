const reverseVowels = (str) => {
    let left = 0, right = str.length - 1;
    let res = str.split('');
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);


    while (left < right) {
        if (!vowels.has(res[left])) left++;
        else if (!vowels.has(res[right])) right--;
        else {

            [res[left], res[right]] = [res[right], res[left]];
            left++;
            right--;

        }
    }
 console.log('str', res.join(''))
}


reverseVowels('hello')
