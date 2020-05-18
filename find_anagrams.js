var findAnagrams = function(s, p) {
    const charCount = countChars(p);
    const result = [];
    
    for (let i = 0; i <= s.length - p.length; i++) {
        let currCount = Object.assign({}, charCount);
        let j = 0;
        
        while (j < p.length) {
            let char = s[i + j]
            if (currCount[char] === 0 || currCount[char] === undefined) break;
            currCount[char]--;
            j++;
            if (j === p.length) result.push(i);
        }
    }
    return result;
};

function countChars(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] ? charCount[char] += 1 : charCount[char] = 1;
    }
    return charCount;
}