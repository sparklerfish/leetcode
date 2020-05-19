var maxSubarraySumCircular = function(A) {
//     let C = A.concat(A);
//     let cur = C[0];
//     let max = C[0];
    
//     let i = 0;
//     let j = 1;
//     while (i < C.length) {
//         while (j < C.length) {
//             if ((j - i) >= A.length) {
//                 cur -= C[i];
//                 i++;
//             }
//             cur += C[j];
//             if (C[i] < 0) cur -= C[i];
//             max = Math.max(cur, max);
//             if (cur < 0) {
//                 i = j + 1;
//                 j = j + 1;
//                 cur = 0;
//             } else {
//                 j++;
//             }
//         }
//         i++;
//     }
    
//     // 

    
//     return max;
    
        let total = 0, maxSum = A[0], curMax = 0, minSum = A[0], curMin = 0;
        for (let a of A) {
            curMax = Math.max(curMax + a, a);
            maxSum = Math.max(maxSum, curMax);
            curMin = Math.min(curMin + a, a);
            minSum = Math.min(minSum, curMin);
            total += a;
        }
        return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};