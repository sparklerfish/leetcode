var rangeSumBST = function (root, L, R) {
    let sum = 0;

    const dfs = node => {
        if (!node) return;
        if (node.val >= L && node.val <= R) sum += node.val;

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return sum;
};