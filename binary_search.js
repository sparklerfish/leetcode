function binarySearch(array, target) {
    if (array.length === 0) return -1;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid + 1, array.length);

    if (array[mid] === target) {
        return mid;
    } else if (target < array[mid]) {
        return binarySearch(left, target);
    } else {
        let searchResult = binarySearch(right, target);
        return searchResult === -1 ? -1 : searchResult + mid + 1;
    }
}