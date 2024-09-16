/*
You want to create a method that receives a hand of 5 cards and returns the best poker hand you can make with those cards.

For simplification, we'll assume cards have a number and a symbol. Numbers go from 1 to 10 and symbols are 'a', 'b', 'c' and 'd'.

To start off, assume there are only 3 types of poker hands, from better to worse. Take into consideration you will have to add the other ones later.

Flush: 5 cards of the same symbol. Example: 10a 4a 2a 7a 9a
Three of a Kind: 3 cards with the same number. Example: 4a 3b 1c 4d 4b
Pair: Two cards with the same number. Example: 3a 2b 8d 1a 8c
Return the best poker hand you have. For example. If you have a pair, return "Pair" or any structure that symbolizes you have a pair.
If you have a three of a kind, return "Three of a Kind" or any structure that represents it.

*/

// charArr = [a,a,a,a] -> flush
// charArr = [a,b,c,a] -> not a flush
// charArr = [d,d,d,d] -> flush
// [a,a,b,c]

// const isFlush = (charArr) => {
//     for(let i = 0; i <5; i++) {
//         if (arr[i] != arr[0]) {
//             return false;
//         }
//     }
//     return true;
// }

// const isThreeOfAKind = (numArr) => {

// }

// const Pair = (numArr) => {

// }


// Example: 10a 4a 2a 7a 9a -> [10,4,2,7,9] , [a,a,a,a]
const pokerCard = (arr) => {
    const numMap = new Map();
    const charMap = new Map();
    for (let val of arr) {
        const number = val.slice(0, -1);
        const char = val.slice(val.length - 1)

        if (!numMap.has(number)) {
            numMap.set(number, 1)
        } else {
            numMap.set(number, numMap.get(number) + 1)
        }

        if (!charMap.has(char)) {
            charMap.set(char, 1)
        } else {
            charMap.set(char, charMap.get(char) + 1)
        }
    }

    if (charMap.size === 1) return 'Flush';

    for (let [key, val] of numMap) {
        if (val === 3) {
            return 'Three of a kind'
        }
        if (val === 2) {
            return 'Pair'
        }
    }
}

//console.log(pokerCard(['3a', '2b', '8d', '1a', '8c']))
//console.log(pokerCard(['4a', '3b', '1c', '4d', '4b']))
console.log(pokerCard(['10a', '4a', '2a', '7a', '9a']))

