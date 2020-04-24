var binaryTreePaths = function (root) {
    const paths = [];
    let path = "";

    const dfs = (node, path) => {
        if (!node) return;
        path += node.val
        if (!node.left && !node.right) {
            paths.push(path);
            return;
        }

        if (node.left) dfs(node.left, path + "->");
        if (node.right) dfs(node.right, path + "->");
    }

    dfs(root, path);
    return paths;
};