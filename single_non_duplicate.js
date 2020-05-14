var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start < end) {
        let mid = (start + end) / 2;
        if (mid % 2 === 1) mid--;
        (nums[mid] === nums[mid + 1]) ? start = mid + 2 : end = mid;
    }

    return nums[start];
};