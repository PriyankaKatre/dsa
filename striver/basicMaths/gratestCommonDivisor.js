// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

const gcd = (num1, num2) => {
    let fNum1 = [];
    let  fNum2 = [];
    let greatest = 0;
    let lIndex = 0;
    for (let i = 0; i <= num1; i++) {
        if (num1 % i === 0) {
            fNum1.push(i)
        }
    }
    for (let i = 0; i <= num2; i++) {
      if (num2 % i === 0) {
        fNum2.push(i);
      }
    }
    for (let i = 0; i < fNum1.length; i++) {
        for (let j = 0; j < fNum2.length; j++) {
            if (fNum1[i] === fNum2[j]) {
                if (fNum1[i] > greatest) {
                    greatest = fNum1[i];
                    lIndex = i
                }
                greatest = Math.max(fNum1[i], greatest);

            }
        }
    }
     console.log("lIndex", lIndex);

    return greatest
}

console.log(gcd(9, 12))
