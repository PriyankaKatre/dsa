const print = (n) => {
    if (n > 0) {
        console.log(n);
        print(n - 1)
    }
}

print(10)
