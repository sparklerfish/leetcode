function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	let sortedOne = arrayOne.sort((a, b) => a - b);
	let sortedTwo = arrayTwo.sort((a, b) => a - b);
	
	let firstIdx = 0;
	let secondIdx = 0;
	let smallestDiff = Infinity;
	let pair;
	
	while (firstIdx < sortedOne.length && secondIdx < sortedTwo.length) {
		let firstNum = sortedOne[firstIdx];
		let secondNum = sortedTwo[secondIdx];
		
		if (Math.abs(firstNum - secondNum) === 0) return [firstNum, secondNum];
		if (Math.abs(firstNum - secondNum) < smallestDiff) {
			smallestDiff = Math.abs(firstNum - secondNum);
			pair = [firstNum, secondNum]
		}
		if (firstNum > secondNum) {
			secondIdx++;
		} else {
			firstIdx++;
		}
	}
	
	return pair;
}