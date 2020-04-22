var maxProfit = function (prices) {
    let b = Infinity;
    p = new Array(prices.length + 1).fill(0);

    for (let i = 0; i < prices.length; i++) {
        b = Math.min(b, prices[i]);
        p[i + 1] = Math.max(p[i], prices[i] - b)
    }
    return p[p.length - 1]
};