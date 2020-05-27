function waterArea(heights) {
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