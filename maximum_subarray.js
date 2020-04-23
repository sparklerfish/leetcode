var maxSubArray = function (nums) {
    let maxSoFar = nums[0];
    let currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = nums[i];
        } else {
            currSum += nums[i];
        }
        maxSoFar = Math.max(currSum, maxSoFar)
    }
    return maxSoFar;
};