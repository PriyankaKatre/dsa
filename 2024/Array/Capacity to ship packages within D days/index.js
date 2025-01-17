let shipWithIndays = (arr, D) => {
    let getDays = (capacty) => {
        let total = 0;
        let days = 1;
        for (let i = 0; i < arr.length; i++) {
            //console.log('total', total) capacity = 12 [1, 1,2, 2, 4, 1, 4, 5]
            total += arr[i];
           // console.log('total', total)
            if (total > capacty) {
                days++;
                console.log('total', i)

                total = arr[i]
                //
            }
        }
         console.log('days', days)
        return days
    }

    let start = Math.max(...arr);
    let end = arr.reduce((a, b) => a + b, 0);
    while (start < end) {
        let mid = start + end / 2;
        //console.log('mid', mid)
        let days = getDays(mid);

        if (days > D) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return end
}
console.log(shipWithIndays([1, 1,2, 2, 4, 1, 4], 3))
