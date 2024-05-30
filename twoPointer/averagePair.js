function averagePair(arr, output){
  // add whatever parameters you deem necessary - good luck!
 let start = 0;
 let end = arr.length -1;
 while(start < end) {
     const average = (arr[start] + arr[end])/2
     if(average === output) return true
     else if(average < output) {
         return start++
     }
     else {
         end--
     }
 }
}

console.log(averagePair([1,2,3],2.5))
