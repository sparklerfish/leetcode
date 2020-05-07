function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	const dp = new Array(array.length + 2).fill(0);
	for (let i = 2; i < dp.length; i++) {
		dp[i] = Math.max((array[i - 2] + dp[i - 2]), dp[i - 1]);
	}
	
	return dp[dp.length - 1]
}