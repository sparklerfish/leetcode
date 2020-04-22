var isHappy = function (n) {
    let result = new Set();

    while (true) {
        let nums = n.toString().split("");
        let total = 0
        for (let i = 0; i < nums.length; i++) {
            total += Math.pow(parseInt(nums[i]), 2)
        }
        if (n === 1) return true
        n = total;
        if (result.has(n)) return false
        result.add(n);
    }
};