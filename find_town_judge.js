var findJudge = function(N, trust) {
    if (trust.length < N - 1) return -1;
    if (!trust.length) return 1;
    let mostTrusted = 0
    
    const notJudge = new Set();
    const trusted = new Array(N + 1).fill(0);
    
    for (let entry of trust) {
        notJudge.add(entry[0]);
        trusted[entry[1]] += 1;
        if (trusted[entry[1]] > trusted[mostTrusted]) {
            mostTrusted = entry[1];
        }
    }
    if (notJudge.has(mostTrusted) || trusted[mostTrusted] < N - 1) return -1;
    return mostTrusted;
    
};