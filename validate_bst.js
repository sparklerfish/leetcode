// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
	let valid = true;
	let max = Infinity;
	let min = -Infinity;
	
	const dfs = (node, min, max) => {
		if (node.value >= max || node.value < min) valid = false;
		
		if (node.left) {
			dfs(node.left, min, node.value);
		}
		
		if (node.right) {
			dfs(node.right, node.value, max);
		}
	}
	
	dfs(tree, min, max);
	return valid;
}
