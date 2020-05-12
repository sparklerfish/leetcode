var isCousins = function(root, x, y) {
    const paths = [];
    
    const dfs = (node, val, path) => {
        if (!node) return;
        path += node.val;
        
        if (node.val === val) {
            paths.push(path);
            return;
        };

        if (node.left) dfs(node.left, val, path + "-");
        if (node.right) dfs(node.right, val, path + "-");
    }
    
    dfs(root, x, "");
    dfs(root, y, "");
    
    const xPath = paths[0].split("-");
    const yPath = paths[1].split("-");
    
    return (xPath.length === yPath.length && xPath[xPath.length - 2] !== yPath[yPath.length - 2]);
};