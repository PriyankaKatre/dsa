const minSteps = (arr) => {
    let steps = 0
    let negetive_numbers = 0;
    let zeroes = 0;
     for (const num of arr) {
        if (num === 0) {
            // If any element is 0, we can change it to 1.
            zeroes++;
        }
        else if (num < 0) {
            // Count the number of negative elements.
            negetive_numbers++;

            // We can change any negative element to 1.
            steps += Math.abs(num) - 1;
              console.log('steps', steps)
        }
        else {
            // All positive elements can be reduced to 1.
            steps += num - 1;
            console.log('steps positive', steps)
        }
     }
    steps= steps + zeroes
    if (negetive_numbers % 2 !== 0 && zeroes === 0)  {
        console.log('neg')
        steps += 2
    }
    return steps
}
console.log(minSteps([-2, -4, -2]))
//console.log(minSteps([-1, -1, 1]))




