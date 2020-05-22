var moveZeroes = function(nums) {
    let zeroes = 0;
    let nonzeroes = 0;
    let size = nums.length;
    
    for (let i = 0; i < size; i++) {
        let num = nums[i];
        if (num !== 0) {
            nums.push(num);
            nonzeroes++;
        } else {
            zeroes++;
        }
    }
    
    for (let j = 0; j < size; j++) {
        nums.shift();
    }
    for (let k = 0; k < zeroes; k++) {
        nums.push(0);
    }
};