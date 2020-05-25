var canConstruct = function(ransomNote, magazine) {
//     const sortedNote = ransomNote.split("").sort();
//     const sortedMag = magazine.split("").sort();
    
//     while(sortedMag.length > 0) {
//         if (sortedNote[0] === sortedMag[0]) sortedNote.shift();
//         sortedMag.shift();
//     }
    
//     return sortedNote.length === 0;
    const letters = {};
    for (let i = 0; i < magazine.length; i++) {
        let char1 = magazine[i];
        letters[char1] ? letters[char1] += 1 : letters[char1] = 1
    }
    
    for (let j = 0; j < ransomNote.length; j++) {
        let char2 = ransomNote[j];
        if (letters[char2]) {
            letters[char2] -= 1;
        } else {
            return false;
        };
    }
    
    return true;
};