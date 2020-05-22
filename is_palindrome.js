var isPalindrome = function(s) {
    if (s.length === 1) return true;
    let i = 0;
    let j = s.length - 1;
    
    while (i <= j) {
        while (!isLetter(s[i]) && i < s.length - 1) i++;
        while (!isLetter(s[j]) && j > 0) j--;
        
        if (s[i].toLowerCase() !== s[j].toLowerCase() && isLetter(s[i]) && isLetter(s[j])) return false;
        i++;
        j--;
    }
    
    return true;
};

function isLetter(char) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    return chars.indexOf(char) >= 0;
}