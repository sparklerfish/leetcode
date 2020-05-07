function longestPeak(array) {
    // Write your code here.
    let streak = 0;
    let longest = 0;

    for (let i = 1; i < array.length - 1; i++) {
        if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
            streak = 1;
            let peak = i;

            while (array[i - 1] < array[i]) {
                streak++;
                i--;
            }
            i = peak;

            while (array[i] > array[i + 1]) {
                streak++;
                i++;
            }
            i = peak;

            if (streak > longest) longest = streak;
        }
    }

    return longest;
}