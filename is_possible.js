function isPossible(a, b, c, d) {
    // Write your code here
    let table = new Array(c - a).fill(new Array(d - b).fill("No"));

    // console.log(table)
    table[0][0] = "Yes";
    for (let i = 0; i < c - a; i++) {
        for (let j = 0; j < d - b; j++) {
            if (i + a + b <= d || j + a + b <= c) {
                table[i][j] = "Yes";
            }
        }
    }

    return table[table.length - 1][table[0].length - 1];
}