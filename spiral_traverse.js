function spiralTraverse(array) {
    // Write your code here.
    let rowEnd = array.length - 1;
    let colEnd = array[0].length - 1;
    let rowStart = 0;
    let colStart = 0;

    let visited = []


    while (rowStart <= rowEnd && colStart <= colEnd) {

        for (let col = colStart; col <= colEnd; col++) {
            visited.push(array[rowStart][col]);
        }

        for (let row = rowStart + 1; row <= rowEnd; row++) {
            visited.push(array[row][colEnd]);
        }

        for (let col = colEnd - 1; col >= colStart; col--) {
            if (rowStart === rowEnd) break;
            visited.push(array[rowEnd][col]);
        }

        for (let row = rowEnd - 1; row > rowStart; row--) {
            if (colStart === colEnd) break;
            visited.push(array[row][colStart]);
        }



        rowStart++;
        rowEnd--;
        colEnd--;
        colStart++;

    }



    return visited;
}