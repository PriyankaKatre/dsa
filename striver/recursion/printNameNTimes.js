const printNameNTimes = (i, n) => {
    if (i > n) {
        return;
    }
    printNameNTimes(i + 1, n);
    console.log((i));
    //console.log('priyanka');
    //console.log(n);
    //printNameNTimes(i+1, n);
    //printNameNTimes(i, n-1)
}

console.log(printNameNTimes(1, 10))
