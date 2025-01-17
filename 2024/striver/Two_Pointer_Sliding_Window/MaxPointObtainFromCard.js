const MaxPointObtainFromCard = (arr, k) => {
    let maxSum = 0;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < k; i++) {
        leftSum += arr[i];
    }
     maxSum = leftSum;
    let lastIndex = arr.length - 1;
    for (let i = k - 1; i >= 0; i--) {
        leftSum = leftSum - arr[i];
        rightSum = rightSum + arr[lastIndex];
        lastIndex--;
        maxSum = Math.max(maxSum, leftSum + rightSum);
    }

    return maxSum
}

const arr = [6, 2, 3, 4, 7, 2, 1, 7, 1];
const k= 4

console.log(MaxPointObtainFromCard(arr, k));


//only either from the front or from back consecutive k cards are allowed not from the middle

// const MaxPointObtainFromCard = (arr, k) => {
//   let leftSum = 0;
//   let rightSum = 0;

//   // Calculate the initial sum of the first k elements
//   for (let i = 0; i < k; i++) {
//     leftSum += arr[i];
//   }

//   // Initialize maxSum with the sum of the first k elements
//   let maxSum = leftSum;

//   // Calculate the sum by taking elements from the end of the array
//   for (let i = 0; i < k; i++) {
//     leftSum -= arr[k - 1 - i];
//     rightSum += arr[arr.length - 1 - i];
//     maxSum = Math.max(maxSum, leftSum + rightSum);
//   }

//   return maxSum;
// };

// const arr = [6, 2, 3, 4, 7, 2, 1, 7, 1];
// const k = 4;

// console.log(MaxPointObtainFromCard(arr, k)); // Should output 17

// function maxScore(cardPoints, k) {
//   let n = cardPoints.length;
//   let total = 0;

//   // Sum of the first k cards
//   for (let i = 0; i < k; i++) {
//     total += cardPoints[i];
//   }

//   let maxPoints = total;

//   // Sliding window: subtract from the end and add from the beginning
//   for (let i = 0; i < k; i++) {
//       total += cardPoints[n - 1 - i] - cardPoints[k - 1 - i];
//       console.log("total", total);
//     maxPoints = Math.max(maxPoints, total);
//   }
//   return maxPoints;
// }

// const arr = [6, 2, 3, 4, 7, 2, 1, 7, 1];
// const k = 4;

// console.log(maxScore(arr, k));

