function minPathSum(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));

    table[0][0] = grid[0][0];

    // console.log(table);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j < n - 1) {
                table[i][j + 1] = Math.min(table[i][j] + grid[i][j + 1], table[i][j + 1])
            }
            if (i < m - 1) {
                table[i + 1][j] = Math.min(table[i][j] + grid[i + 1][j], table[i + 1][j])
            }
        }
    }
    console.log(table[m - 1][n - 1]);
    return table[m - 1][n -1];
}

minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
])