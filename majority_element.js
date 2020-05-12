var majorityElement = function(nums) {
    let count = {};
    let min = (nums.length - 1)/2;
    let majority;
    
    nums.forEach(num => {
        count[num] === undefined ? count[num] = 1 : count[num] += 1;
        if (count[num] > min) {
            majority = num;
            return;
        }
    }) 
    return majority;
};