function waterArea(heights) {
  // Write your code here.
	// | 
	// |   |     | 2 | 1 |
	// | 2 | 2 2 | _ | | | 
	// 
	// [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
	// 
	// [0, 8, 0, 0, 5]
	// left = 
	// 
	// left  [0,  8,  8,  8,  8,  8,  8,  10, 10, 10, 10, 10, 10, 10]
	// right [10, 10, 10, 10, 10, 10, 10, 10, 3,   3,  3,  3,  3,  3]
	// min(left, right) - current
	
	// total = 16
	//        [0, 0,  8, 8, 3, 8, 8, 0, 3, 3, 2, 2, 3, 0]
	// if either array is 0 at a given index, result is 0
	// else, result is min(left, right)
	// total: 2
	// 
	// [8, 9]
	// there must be a smaller number between two larger numbers
	// in order to hold water
	
	// result = 0
	
	// lefts = []
	// left = 0
	// for p in h
	// 
	// if p > left, left = p
	// lefts.push(left)
	
	// rights = []
	// h.length - 1 downto 0
	// if p > right right = p
	// rights.shift(right)
	
	// 0 to h. each i
	// result += min(lefts[i], rights[i]) - heights[i]
	// return result
	
	let left = 0;
	const lefts = [];
	
	let right = 0;
	const rights = [];
	
	let area = 0;
	
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] > left) left = heights[i];
		lefts.push(left);
	}
	
	for (let j = heights.length - 1; j >= 0; j--) {
		if (heights[j] > right) right = heights[j];
		rights.unshift(right);
	}
	
	for (let k = 0; k < heights.length; k++) {
		area += Math.min(rights[k], lefts[k]) - heights[k];
	}
	
	return area;
}