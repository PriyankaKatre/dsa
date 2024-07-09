const towerOfHanoi = (n, from, to, using) => {
    if (n === 1) {
        console.log(`Moving disk 1 from ${from} to ${to}`);
        return
    }
    towerOfHanoi(n - 1, from, using, to)
    console.log(`Moving disk ${n}  ${from} to ${to}`)
    towerOfHanoi(n - 1, using, to, from)
}

console.log(towerOfHanoi(3, 'A' , 'B' , 'C'))
