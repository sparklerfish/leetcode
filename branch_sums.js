class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	let sum = 0;
	let sums = [];
	
	const dfs = (node, sum) => {
		if (!node) return;
		sum += node.value;
		
		if (!node.left && !node.right) {
			sums.push(sum);
		}
		
		
		dfs(node.left, sum);
		dfs(node.right, sum);
	}
	
	dfs(root, 0);
	return sums;
}