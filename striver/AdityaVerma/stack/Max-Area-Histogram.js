const maxAreaHistogram = (arr) => {
    let NSLI = [],
      NSRI = [],
      stack1 = [],
      stack2 = [],
      width = [],
      area = [],
      maxArea =0,
      nsrPsudeoIndex = arr.length,
      nslPsudeoIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        if (stack1.length === 0) {
            NSLI.push(nslPsudeoIndex);
        } else if (stack1.length > 0 && arr[stack1[stack1.length - 1]] < arr[i]) {
            NSLI.push(stack1[stack1.length - 1]);
        } else if (stack1.length > 0 && arr[stack1[stack1.length - 1]] >= arr[i]) {
            while (
              stack1.length > 0 &&
              arr[stack1[stack1.length - 1]] >= arr[i]
            ) {
                stack1.pop();
            }
            if (stack1.length === 0) {
                NSLI.push(nslPsudeoIndex);
            } else {
                 NSLI.push(stack1[stack1.length - 1]);
            }
        }
        stack1.push(i)
    }
     for (let i = arr.length-1; i >= 0; i--) {
       if (stack2.length === 0) {
         NSRI.push(nsrPsudeoIndex);
       } else if (stack2.length > 0 && arr[stack2[stack2.length - 1]] < arr[i]) {
         NSRI.push(stack2[stack2.length - 1]);
       } else if (stack2.length > 0 && arr[stack2[stack2.length - 1]] >= arr[i]) {
         while (stack2.length > 0 && arr[stack2[stack2.length - 1]] >= arr[i]) {
           stack2.pop();
         }
         if (stack2.length === 0) {
           NSRI.push(nsrPsudeoIndex);
         } else {
           NSRI.push(stack2[stack2.length - 1]);
         }
       }
       stack2.push(i);
     }
    NSRI = NSRI.reverse();
    for (let i = 0; i < arr.length; i++) {
        width[i] = NSRI[i] - NSLI[i] - 1;
    }
    for (let i = 0; i < arr.length; i++) {
      area[i] = width[i] * arr[i];
    }
    maxArea = Math.max(...area)
    return maxArea;
}

console.log(maxAreaHistogram([6, 2, 5, 3, 5, 1, 6]));
