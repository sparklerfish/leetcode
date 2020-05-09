var numJewelsInStones = function(J, S) {
    const jewels = new Set();
    let count = 0;
    for (let i = 0; i < J.length; i++) {
        jewels.add(J[i])
    }
    for (let j = 0; j < S.length; j++) {
        if (jewels.has(S[j])) count++
    }
    return count;
};