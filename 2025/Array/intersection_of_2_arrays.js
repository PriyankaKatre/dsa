const intersection = (arr1, arr2) => {
     let set = new Set();
     let output = [];
     for (let i = 0; i < arr1.length; i++) {
       set.add(arr1[i]);
     }
     for (let i = 0; i < arr2.length; i++) {
        if(set.has(arr2[i])) {
            output.push(arr2[i])
        }
     }

     return output;
}

console.log(intersection([1, 1, 2, 3, 4], [5, 6, 1, 2, 9, 8]));
