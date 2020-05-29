var closestDivisors = function(num) {
    let min = Infinity;
    let divs = [];

    for (let i = 1; i <= Math.sqrt(num + 1); i++) {
        let j = (num + 1) / i;
        if (Number.isInteger(j)) {
            if (Math.abs(i - j) < min) {
                min = Math.abs(i - j);
                divs = [i, j];
            }
        }
    }

    for (let i = 1; i <= Math.sqrt(num + 2); i++) {
        let j = (num + 2) / i;
        if (Number.isInteger(j)) {
            if (Math.abs(i - j) < min) {
                min = Math.abs(i - j);
                divs = [i, j];
            }
        }
    }

    return divs;
};