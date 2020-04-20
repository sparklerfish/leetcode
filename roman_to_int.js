var romanToInt = function (s) {
    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let nextChar = s[i + 1]
        if (values[char] < values[nextChar]) {
            total -= values[char];
        } else {
            total += values[char];
        }
    }

    return total;
};