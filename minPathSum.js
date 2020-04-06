function minPathSum(grid) {
    let table = new Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        table[i] = new Array(grid[0].length).fill(Infinity);
    }

    console.log(table);
}

minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
])