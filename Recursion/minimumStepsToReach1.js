const countSteps = (n) => {
    if (n === 1) return 0;

    let opt1 = countSteps(n - 1);
    let minSteps = opt1


    if (n % 2 === 0) {
        let opt2 = countSteps(n / 2);
        if (opt2 < minSteps) {
            minSteps = opt2
        }
    }

    if (n % 3 === 0) {
        let opt3 = countSteps(n / 3);
        if (opt3 < minSteps) {
            minSteps = opt3
        }
    }

    return 1+ minSteps

}
console.log(countSteps(10))
