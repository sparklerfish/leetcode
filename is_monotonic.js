function isMonotonic(array) {
	if (array.length <= 2) return true;
	let increasing = true;
	let decreasing = true;
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] > array[i + 1]) increasing = false;
		if (array[i] < array[i + 1]) decreasing = false;
	}
	return increasing || decreasing;
}