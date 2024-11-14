const sumOfNNaturalNumber = (num , sum) => {
    if (num < 1) {
        console.log(sum);
        return;
    }
        sumOfNNaturalNumber(num-1, num+sum)
    return sum
}

console.log(sumOfNNaturalNumber(10, 0));
