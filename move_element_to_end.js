function moveElementToEnd(array, toMove) {
    // Write your code here.
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        if (array[start] !== toMove) {
            start++;
        } else if (array[end] === toMove) {
            end--;
        } else {
            let temp = array[start];
            array[start] = array[end];
            array[end] = temp;
        }
    }
    return array;
}